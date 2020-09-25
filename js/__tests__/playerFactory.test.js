import playerFactory from '../playerFactory';

describe('player', () => {
  it('returns a new player object', () => {
    expect(playerFactory()).toEqual({});
  });
  it('the returned object has a name and mark property', () => {
    const testPlayer = playerFactory();
    expect(testPlayer).toHaveProperty('name');
    expect(testPlayer).toHaveProperty('mark');
  });
});