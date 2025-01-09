export const PREMIER = 'Premier';
export const CHAMPIONSHIP = 'Championship';
export const LEAGUE2 = 'League2';

export type Team = {
  name: string;
  division: typeof PREMIER | typeof CHAMPIONSHIP | typeof LEAGUE2;
  drawSlips: number;
};

export const createDrawSlips = (teams: Team[]) => {
  const seededTeams: Team[] = [];

  for (let i = 0; i < teams.length; i++) {
    for (let j = 0; j < teams[i].drawSlips; j++) {
      seededTeams.push(teams[i]);
    }
  }

  return seededTeams;
};

export const selectRandomTeam = (teams: Team[]) => {
  const index = Math.floor(Math.random() * teams.length);

  return teams[index];
};
