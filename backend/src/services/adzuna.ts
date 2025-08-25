import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const ADZUNA_API_URL = 'https://api.adzuna.com/v1/api/jobs/gb/search/1'; // Using GB as an example

export const fetchJobsFromAdzuna = async (query: string, location: string) => {
  try {
    const response = await axios.get(ADZUNA_API_URL, {
      params: {
        app_id: process.env.ADZUNA_APP_ID,
        app_key: process.env.ADZUNA_APP_KEY,
        results_per_page: 20,
        what: query,
        where: location,
        content_type: 'application/json',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching jobs from Adzuna:', error);
    throw new Error('Failed to fetch jobs.');
  }
};