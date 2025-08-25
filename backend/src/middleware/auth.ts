import { Request, Response, NextFunction } from 'express';
import { supabase } from '../utils/supabaseClient.js';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer JWT is req here frontend dudes add

  if (!token) {
    return res.status(401).json({ error: 'Authentication token not provided.' });
  }

  const { data: { user }, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }

  // Attach user to the request object for use in controllers
  req.user = user;
  next();
};