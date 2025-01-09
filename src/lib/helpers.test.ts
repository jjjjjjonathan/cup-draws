import { expect, test, describe } from 'vitest';
import { PREMIER, createDrawSlips } from './helpers';
import type { Team } from './helpers';

const teams: Team[] = [
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

describe('Seeding Premier teams', () => {
  const seededTeams = createDrawSlips(teams);

  test('returns array with only one Scrosoppi', () => {
    expect(
      seededTeams.filter((team) => team.name === 'Scrosoppi FC').length
    ).toBe(1);
  });

  test('returns array with only four Vaughans', () => {
    expect(
      seededTeams.filter((team) => team.name === 'Vaughan Azzurri').length
    ).toBe(4);
  });

  test('returns array with 102 St Catharines', () => {
    expect(
      seededTeams.filter((team) => team.name === 'St. Catharines Roma').length
    ).toBe(102);
  });
});
