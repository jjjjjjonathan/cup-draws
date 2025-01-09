import { expect, test, expectTypeOf, assertType } from 'vitest';
import { pickRandomItem } from './helpers';
import type { Team } from './helpers';

const teams: Team[] = [
  { name: 'Scrosoppi FC', division: 'Premier' },
  { name: 'Waterloo United', division: 'Championship' },
  { name: 'Rush Canada Academy', division: 'League2' },
];

// test('returns a team', () => {
//   const pickedTeam = pickRandomItem(teams);
//   console.log(pickedTeam);
//   assertType<Team>(pickedTeam);
// });
