import { Request, Response } from 'express';
import { supabase } from '../utils/supabaseClient.js';

// Get a list of all skills in the database (for autocomplete)
export const getAllSkills = async (res: Response) => {
    try {
        const { data, error } = await supabase
            .from('skills')
            .select('id, name')
            .order('name', { ascending: true });
        
        if (error) throw error;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

// Add a skill to the logged-in user's profile
export const addUserSkill = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'User not authenticated' });

    const { skillName } = req.body;
    if (!skillName) return res.status(400).json({ error: 'Skill name is required.' });
    
    try {
        // Find the skill or create it if it doesn't exist
        let { data: skill, error: skillError } = await supabase
            .from('skills')
            .upsert({ name: skillName.trim() }, { onConflict: 'name' })
            .select('id')
            .single();

        if (skillError) throw skillError;
        if (!skill || !skill.id) {
            return res.status(400).json({ error: 'Skill could not be found or created.' });
        }
        
        // Link the skill to the user
        const { error: linkError } = await supabase
            .from('user_skills')
            .insert({ user_id: userId, skill_id: skill.id });
        
        // Ignore duplicate errors (if the user already has the skill)
        if (linkError && linkError.code !== '23505') throw linkError;

        res.status(201).json({ message: 'Skill added successfully.', skill });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

// Remove a skill from the logged-in user's profile
export const removeUserSkill = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'User not authenticated' });

    const { skillId } = req.params;
    if (!skillId) return res.status(400).json({ error: 'Skill ID is required.' });

    try {
        const { error } = await supabase
            .from('user_skills')
            .delete()
            .eq('user_id', userId)
            .eq('skill_id', parseInt(skillId));

        if (error) throw error;

        res.status(200).json({ message: 'Skill removed successfully.' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};