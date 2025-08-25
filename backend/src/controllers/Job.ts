// src/controllers/jobs.controller.ts
import { Request, Response } from 'express';
import { supabase } from '../utils/supabaseClient.js';
import { fetchJobsFromAdzuna } from '../services/adzuna.js';
import { calculateMatchScore } from '../services/match.js';

// Search for jobs and add match scores
export const searchJobs = async (req: Request, res: Response) => {
  const { query, location } = req.query;
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({ error: 'User not authenticated' });
  }

  try {
    // 1. Fetch user's skills from your DB
    const { data: skillsData, error: skillsError } = await supabase
      .from('user_skills')
      .select('skills(name)')
      .eq('user_id', userId);

    if (skillsError) throw skillsError;
    const userSkills = skillsData.flatMap(item => item.skills.map((skill: { name: string }) => skill.name));

    // 2. Fetch jobs from Adzuna
    const jobs = await fetchJobsFromAdzuna(query as string, location as string);

    // 3. Calculate match score for each job
    const jobsWithMatchScore = jobs.map((job: any) => ({
      ...job,
      matchScore: calculateMatchScore(userSkills, job.description),
    }));
    
    // 4. Sort jobs by match score (highest first)
    jobsWithMatchScore.sort((a: { matchScore: number; }, b: { matchScore: number; }) => b.matchScore - a.matchScore);

    res.status(200).json(jobsWithMatchScore);

  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

// Save a job for the logged-in user
export const saveJob = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const { adzuna_job_id, title, company, location, description, job_url } = req.body;

  if (!userId) {
    return res.status(401).json({ error: 'User not authenticated' });
  }

  const { data, error } = await supabase.from('saved_jobs').insert({
    user_id: userId,
    adzuna_job_id,
    title,
    company,
    location,
    description,
    job_url,
  }).select();

  if (error) {
    return res.status(500).json({ error: 'Could not save job. It might already be saved.' });
  }

  res.status(201).json(data);
};

//  have to add functions for getSavedJobs, removeSavedJob etc.