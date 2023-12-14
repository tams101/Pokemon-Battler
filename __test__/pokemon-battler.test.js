const classes = require('../pokemon-battler')
const Pokemon = classes.Pokemon;
const Fire = classes.Fire;
const Water = classes.Water;
const Grass = classes.Grass;
const Normal = classes.Normal;

describe('pokemonBattler', () => {
  test('Check that pokemon is an object', () => {
    const expectedOutput = {}
    const pokemonTest = new Pokemon('Eevee', 55, 18, 'headbutt')

    expect(typeof pokemonTest).toEqual(typeof expectedOutput)
  });
  test('Check that the pokemon has the following properties: name, hitPoints, attackDamage, move', () => {
    const pokemonTest = new Pokemon('Eevee', 55, 18, 'headbutt')
    const expectedOutput = true;

  const actualOutputName = pokemonTest.hasOwnProperty('name');
  const actualOutputHitPoints = pokemonTest.hasOwnProperty('hitPoints');
  const actualOutputAttack = pokemonTest.hasOwnProperty('attackDamage');
  const actualOutputMove = pokemonTest.hasOwnProperty('move');

    expect(actualOutputName).toEqual(expectedOutput)
    expect(actualOutputHitPoints).toEqual(expectedOutput)
    expect(actualOutputAttack).toEqual(expectedOutput)
    expect(actualOutputMove).toEqual(expectedOutput)
  });
  test('Check that .takeDamage() takes a number and reduces the pokemon\'s health by that number', () => {
    const pokemonTest = new Pokemon('Eevee', 55, 18, 'headbutt')
    const expectedOutput = 45;
    pokemonTest.takeDamage(10)
    const actualOutput = pokemonTest.hitPoints

    expect(actualOutput).toBe(expectedOutput);

  });
  test('Check that .useMove() returns the pokemon\'s attackDamage', () => {
    const pokemonTest = new Pokemon('Eevee', 55, 18, 'headbutt')
    const expectedOutput = 18;
    const actualOutput = pokemonTest.useMove();

    expect(actualOutput).toBe(expectedOutput)
  });
  test('Check that .useMove() console.logs "Pokemon X used Pokemon X\'s move"', () => {
    const pokemonTest = new Pokemon('Eevee', 55, 18, 'headbutt')
    const consoleSpy = jest.spyOn(console, 'log');

    pokemonTest.useMove();

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('Eevee used Eevee\'s move')
  });
  test('Check that .hasFainted() returns false if a pokemon has more than 0 hitPoints', () => {
    const pokemonTest = new Pokemon('Eevee', 55, 18, 'headbutt')

    const expectedOutput = false;
    const actualOutput = pokemonTest.hasFainted();

    expect(actualOutput).toBe(expectedOutput)
  });
  test('Check that .hasFainted() returns true if a pokemon has 0 hitPoints', () => {
    const pokemonTest = new Pokemon('Eevee', 55, 18, 'headbutt')

    const expectedOutput = true;
    pokemonTest.takeDamage(55)
    const actualOutput = pokemonTest.hasFainted();

    expect(actualOutput).toBe(expectedOutput)
  });
  test('Check that when a new pokemon is created using a class that the pokemon is made with their correct type', () => {
    const pokemonTest = new Pokemon('Eevee', 55, 18, 'headbutt')

    const expectedOutput = {
      name: 'Eevee',
      hitPoints: 55,
      attackDamage: 18,
      move: 'headbutt'
    }

    expect(pokemonTest).toEqual(expectedOutput);
  });
  test('Check that when a new fire pokemon is created that it is given the type of fire', () => {
    const pokemonTest = new Fire('Charmander', 44, 17, 'flamethrower');

  const expectedOutput = {
    name: 'Charmander',
    hitPoints: 44,
    attackDamage: 17,
    move: 'flamethrower',
    type: 'Fire'
  };

  expect(pokemonTest).toEqual(expectedOutput);
  });
  test('Check that when a new water pokemon is created that it is given the type of water', () => {
    const pokemonTest = new Water('Vaporeon', 70, 19, 'Hydro pump');

  const expectedOutput = {
    name: 'Vaporeon',
    hitPoints: 70,
    attackDamage: 19,
    move: 'Hydro pump',
    type: 'Water'
  };

  expect(pokemonTest).toEqual(expectedOutput);
  });
  test('Check that when a new grass pokemon is created that it is given the type of grass', () => {
    const pokemonTest = new Grass('Bulbasaur', 45, 16, 'Razor leaf');

  const expectedOutput = {
    name: 'Bulbasaur',
    hitPoints: 45,
    attackDamage: 16,
    move: 'Razor leaf',
    type: 'Grass'
  };

  expect(pokemonTest).toEqual(expectedOutput);
  });
  test('Check that when a new normal pokemon is created that it is given the type of normal', () => {
    const pokemonTest = new Normal('Eevee', 55, 18, 'headbutt');

  const expectedOutput = {
    name: 'Eevee',
    hitPoints: 55,
    attackDamage: 18,
    move: 'headbutt',
    type: 'Normal'
  };

  expect(pokemonTest).toEqual(expectedOutput);
  });
})