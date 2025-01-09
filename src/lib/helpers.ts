export type Team = {
  name: string;
  division: 'Premier' | 'Championship' | 'League2';
};

export function pickRandomItem(teams: Team[]) {
  const i = Math.floor(Math.random() * teams.length);
  return teams[i];
}
