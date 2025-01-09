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

export const mensFirstRound: Team[] = [
  { name: 'Waterloo United', division: CHAMPIONSHIP, drawSlips: 0 },
  { name: 'Darby FC', division: CHAMPIONSHIP, drawSlips: 0 },
  { name: `Master's FA`, division: CHAMPIONSHIP, drawSlips: 0 },
  { name: 'North Mississauga SC', division: CHAMPIONSHIP, drawSlips: 0 },
  { name: 'Pickering FC', division: CHAMPIONSHIP, drawSlips: 0 },
  { name: 'York United Academy', division: CHAMPIONSHIP, drawSlips: 0 },
  { name: 'Unionville-Milliken SC', division: CHAMPIONSHIP, drawSlips: 0 },
  { name: 'Windsor City FC', division: CHAMPIONSHIP, drawSlips: 0 },
  { name: 'Sudbury Cyclones', division: CHAMPIONSHIP, drawSlips: 0 },
  { name: 'The Borough FC', division: CHAMPIONSHIP, drawSlips: 0 },
  { name: 'Guelph United FC', division: CHAMPIONSHIP, drawSlips: 0 },
  { name: 'Hamilton United', division: CHAMPIONSHIP, drawSlips: 0 },
  { name: 'Rush Canada Academy', division: LEAGUE2, drawSlips: 0 },
  { name: 'Cambridge United', division: LEAGUE2, drawSlips: 0 },
  { name: 'Railway City', division: LEAGUE2, drawSlips: 0 },
];

export const mensByeRound: Team[] = [
  { name: 'Scrosoppi FC', division: PREMIER, drawSlips: 1 },
  { name: 'Vaughan Azzurri', division: PREMIER, drawSlips: 4 },
  { name: 'Woodbridge Strikers', division: PREMIER, drawSlips: 8 },
  { name: 'North Toronto Nitros', division: PREMIER, drawSlips: 14 },
  { name: 'Simcoe County Rovers', division: PREMIER, drawSlips: 21 },
  { name: 'Alliance United', division: PREMIER, drawSlips: 30 },
  { name: 'Oakville SC', division: PREMIER, drawSlips: 40 },
  { name: 'Burlington SC', division: PREMIER, drawSlips: 49 },
  { name: 'Sigma FC', division: PREMIER, drawSlips: 62 },
  { name: 'ProStars FC', division: PREMIER, drawSlips: 76 },
  { name: 'FC London', division: PREMIER, drawSlips: 92 },
  { name: 'St. Catharines Roma', division: PREMIER, drawSlips: 102 },
];
