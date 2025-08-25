export const calculateMatchScore = (userSkills: string[], jobDescription: string): number => {
  if (!userSkills || userSkills.length === 0 || !jobDescription) {
    return 0;
  }

  const descriptionLower = jobDescription.toLowerCase();
  let matchCount = 0;

  userSkills.forEach(skill => {
    if (descriptionLower.includes(skill.toLowerCase())) {
      matchCount++;
    }
  });

  const score = Math.round((matchCount / userSkills.length) * 100);
  return score > 100 ? 100 : score; // Cap score at 100%
};

//keywords are matched here 