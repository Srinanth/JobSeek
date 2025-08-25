import { Request, Response } from 'express';
import { supabase } from '../utils/supabaseClient.js';

// Get the full profile for the logged-in user
export const getProfile = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'User not authenticated' });

    try {
        // Fetch profile and all related data in one go
        const { data, error } = await supabase
            .from('profiles')
            .select(`
                *,
                skills ( id, name ),
                work_experience ( * ),
                education_history ( * )
            `)
            .eq('id', userId)
            .single();

        if (error) throw error;
        if (!data) return res.status(404).json({ error: 'Profile not found' });

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

// Update basic profile details
export const updateProfile = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'User not authenticated' });

    // Extract only the allowed fields to prevent users from updating protected columns
    const { full_name, username, headline, bio, location } = req.body;
    const profileData = { full_name, username, headline, bio, location };

    try {
        const { data, error } = await supabase
            .from('profiles')
            .update({ ...profileData, updated_at: new Date() })
            .eq('id', userId)
            .select()
            .single();

        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

// Upload a profile picture
export const uploadAvatar = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'User not authenticated' });
    if (!req.file) return res.status(400).json({ error: 'No file uploaded.' });

    try {
        const file = req.file;
        const fileName = `avatars/${userId}-${Date.now()}`;

        // Upload to Supabase Storage
        const { error: uploadError } = await supabase.storage
            .from('user-assets') // NOTE: Create a bucket named 'user-assets' in Supabase Storage
            .upload(fileName, file.buffer, {
                contentType: file.mimetype,
                upsert: true,
            });

        if (uploadError) throw uploadError;

        // Get the public URL
        const { data: { publicUrl } } = supabase.storage
            .from('user-assets')
            .getPublicUrl(fileName);
            
        // Update the profile with the new avatar URL
        const { error: updateError } = await supabase
            .from('profiles')
            .update({ profile_picture_url: publicUrl })
            .eq('id', userId);

        if (updateError) throw updateError;

        res.status(200).json({ message: 'Avatar updated successfully.', avatarUrl: publicUrl });

    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};