import {square} from '../src/index.ts';

describe('first tests', () => {
  test('I expect 2 squared to be 4', () => {
    expect(square(2)).toBe(4);
  });
});
