const classes = require('../pokemon-battler')
const Pokemon = classes.Pokemon;
const Fire = classes.Fire;
const Water = classes.Water;
const Grass = classes.Grass;
const Normal = classes.Normal;
const Charmander = classes.Charmander;
const Squirtle = classes.Squirtle;
const Bulbasaur = classes.Bulbasaur;
const Rattata = classes.Rattata;
const Pokeball = classes.Pokeball;
const Trainer = classes.Trainer;

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
    consoleSpy.mockRestore();
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
  test('isEffectiveAgainst() - checks if a fire pokemon is effective against a grass pokemon', () => {
    const firePokemon = new Fire('Charmander', 44, 17, 'flamethrower')
    const grassPokemon = new Grass('Bulbasaur', 45, 16, 'Razor leaf')
    const actualOutput = firePokemon.isEffectiveAgainst(grassPokemon)
    const expectedOutput = true
    expect(actualOutput).toBe(expectedOutput)
  })
  test('isEffectiveAgainst() - checks if a grass pokemon is effective against a water pokemon', () => {
    const waterPokemon = new Water('Vaporeon', 70, 19, 'Hydro pump')
    const grassPokemon = new Grass('Bulbasaur', 45, 16, 'Razor leaf')
    const actualOutput = grassPokemon.isEffectiveAgainst(waterPokemon)
    const expectedOutput = true
    expect(actualOutput).toBe(expectedOutput)
  })
  test('isEffectiveAgainst() - when given a normal pokemon, return false as its not effective against a specific type', () => {
    const waterPokemon = new Water('Vaporeon', 70, 19, 'Hydro pump')
    const grassPokemon = new Grass('Bulbasaur', 45, 16, 'Razor leaf')
    const normalPokemon = new Normal('Eevee', 55, 18, 'headbutt')
    const firePokemon = new Fire('Charmander', 44, 17, 'flamethrower')
    expect(waterPokemon.isEffectiveAgainst(firePokemon)).toBe(true)
    expect(normalPokemon.isEffectiveAgainst(grassPokemon)).toBe(false)
  })
  test('isWeakTo() - checks if fire pokemon is weak against water pokemon', () => {
    const firePokemon = new Fire('Charmander', 44, 17, 'flamethrower')
    const waterPokemon = new Water('Vaporeon', 70, 19, 'Hydro pump')
    expect(firePokemon.isWeakTo(waterPokemon)).toBe(true)
  })
  test('isWeakTo() - returns true when pokemon is weak against given pokemon, false if not', () => {
    const waterPokemon = new Water('Vaporeon', 70, 19, 'Hydro pump')
    const grassPokemon = new Grass('Bulbasaur', 45, 16, 'Razor leaf')
    const normalPokemon = new Normal('Eevee', 55, 18, 'headbutt')
    const firePokemon = new Fire('Charmander', 44, 17, 'flamethrower')
    expect(waterPokemon.isWeakTo(grassPokemon)).toBe(true)
    expect(grassPokemon.isWeakTo(firePokemon)).toBe(true)
    expect(normalPokemon.isWeakTo(firePokemon)).toBe(false)
  })
  test('create a new class by extending the fire class to create Charmander', () => {
    const charmanderTest = new Charmander('Charmander', 44, 17, 'flamethrower')
    const expectedOutput = {
      name: 'Charmander',
      hitPoints: 44,
      attackDamage: 17,
      move: 'Ember',
      type: 'Fire'
    }
    expect(charmanderTest).toEqual(expectedOutput)
  })
  test('create a new class by extending the water class to create Squirtle', () => {
    const squirtleTest = new Squirtle('Squirtle', 44, 16, 'Surf')
    const expectedOutput = {
      name: 'Squirtle',
      hitPoints: 44,
      attackDamage: 16,
      move: 'Water gun',
      type: 'Water'
    }
    expect(squirtleTest).toEqual(expectedOutput)
  })
  test('create two class by extending the grass and normal types to create Bulbasaur and Rattata', () => {
    const bulbasaurTest = new Bulbasaur('Bulbasaur', 45, 16, 'Razor leaf')
    const bulbasaurExpectedOutput = {
      name: 'Bulbasaur',
      hitPoints: 45,
      attackDamage: 16,
      move: 'Vine whip',
      type: 'Grass'
    }
    const rattataTest = new Rattata('Rattata', 40, 15, 'Bite')
    const rattataExpectedOutput = {
      name: 'Rattata',
      hitPoints: 40,
      attackDamage: 15,
      type: 'Normal'
    }
    expect(bulbasaurTest).toEqual(bulbasaurExpectedOutput)
    expect(rattataTest).toEqual(rattataExpectedOutput)
  })
  test('create Pokeball class with method of throw - if pokeball storage is empty, store given pokemon', () => {
    const pokeballTest = new Pokeball()
    const bulbasaur = new Bulbasaur('Bulbasaur', 45, 16, 'Razor leaf')
    pokeballTest.throw(bulbasaur)
    const expectedOutput = 'Bulbasaur'
    expect(pokeballTest.storage).toBe(expectedOutput)
  })
  test('throw() - if storage isn\'t empty, do not capture given pokemon', () => {
    const pokeballTest = new Pokeball()
    const bulbasaur = new Bulbasaur('Bulbasaur', 45, 16, 'Razor leaf')
    pokeballTest.throw(bulbasaur)
    const charmander = new Charmander('Charmander', 44, 17, 'flamethrower')
    const consoleSpy = jest.spyOn(console, 'log');
    pokeballTest.throw(charmander)
  expect(consoleSpy).toHaveBeenCalledTimes(1);
  expect(consoleSpy).toHaveBeenCalledWith('Pokeball is occupied - the pokemon could not be captured')
  consoleSpy.mockRestore();
  })
  test('isEmpty() - should return false if a pokemon is stored in the pokeball', () => {
    const pokeballTest = new Pokeball()
    const bulbasaur = new Bulbasaur('Bulbasaur', 45, 16, 'Razor leaf')
    pokeballTest.throw(bulbasaur)
    const actualOutput = pokeballTest.isEmpty()
    expect(actualOutput).toBe(false)
  })
  test('isEmpty() - should return true if no pokemon is stored in the pokeball', () => {
    const pokeballTest = new Pokeball()
    const actualOutput = pokeballTest.isEmpty()
    expect(actualOutput).toBe(true)
  })
  test('contains() - should return stored pokemon\'s name when pokeball is occupied', () => {
    const pokeballTest = new Pokeball()
    const bulbasaur = new Bulbasaur('Bulbasaur', 45, 16, 'Razor leaf')
    pokeballTest.throw(bulbasaur)
    const actualOutput = pokeballTest.contains()
    expect(actualOutput).toBe('Bulbasaur')
  })
  test('contains() - should return "empty..." if pokeball is not occupied', () => {
    const pokeballTest = new Pokeball()
    const actualOutput = pokeballTest.contains()
    expect(actualOutput).toBe('empty...')
  })
  test('create a trainer class, with belt property that can hold up to 6 pokeballs', () => {
    const trainerTest = new Trainer()
    const actualOutput = trainerTest.belt.length
    expect(actualOutput).toBe(0)
  })
  test('catch() - should catch a pokemon when there is room on the trainer\'s belt', () => {
    const trainerTest = new Trainer()
    const squirtle = new Squirtle('Squirtle', 44, 16, 'Surf')
    trainerTest.catch(squirtle)
    const actualOutput = trainerTest.belt.length
    expect(actualOutput).toBe(1)
  })
  test('catch() - when belt is full do not catch additional pokemon', () => {
    const trainerTest = new Trainer()
    const squirtle = new Squirtle('Squirtle', 44, 16, 'Surf')
    trainerTest.catch(squirtle)
    trainerTest.catch(squirtle)
    trainerTest.catch(squirtle)
    trainerTest.catch(squirtle)
    trainerTest.catch(squirtle)
    trainerTest.catch(squirtle)
    trainerTest.catch(squirtle)
    const actualOutput = trainerTest.belt.length
    expect(actualOutput).toBe(6)
  });
  test('getPokemon() - searches for pokemon in the player\'s belt and if pokemon isn\'t in the belt then capture the pokemon', () => {
    const trainerTest = new Trainer();
    const squirtle = new Squirtle('Squirtle', 44, 16, 'Surf');
    trainerTest.getPokemon(squirtle)
    const actualOutput = trainerTest.belt.includes('Squirtle')

    expect(actualOutput).toBe(true)
  });
  test('getPokemon() - searches for pokemon in the player\'s belt and if pokemon is in the belt then don\'t capture the pokemon', () => {
    const trainerTest = new Trainer();
    const squirtle = new Squirtle('Squirtle', 44, 16, 'Surf');
    trainerTest.catch(squirtle)
    const consoleSpy = jest.spyOn(console, 'log');
    trainerTest.getPokemon(squirtle)
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('You have already caught this pokemon!')
    consoleSpy.mockRestore();
  });
})