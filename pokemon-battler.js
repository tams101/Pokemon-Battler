/*
const pokemonPrototype = {
  takeDamage: function(num) {
    this.hitPoints -= num
    return this.hitPoints
  },
  useMove: function() {
    console.log(`${this.name} used ${this.name}'s move`)
    return this.attackDamage
  },
  hasFainted: function() {
    if (this.hitPoints === 0) {
      return true
    }
    else {return false}
  }
}

function pokemonCreator() {
  const pokemon = Object.create(pokemonPrototype)
  
    pokemon.name = 'Eevee',
    pokemon.hitPoints = 55,
    pokemon.attackDamage = 18,
    pokemon.move = 'headbutt'

  return pokemon
}
*/


class Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move
  }

  takeDamage(num) {
    this.hitPoints -= num
    return this.hitPoints
  }

  useMove() {
    console.log(`${this.name} used ${this.name}'s move`)
    return this.attackDamage
  }

  hasFainted() {
    if (this.hitPoints === 0) {
      return true
    }
    else {return false}
  }

  isEffectiveAgainst(pokemon) {
    if (this.type === 'Fire' && pokemon.type === 'Grass') {
      return true
    } else if (this.type === 'Grass' && pokemon.type === 'Water') {
      return true
    } else if (this.type === 'Water' && pokemon.type === 'Fire') {
      return true
    }
    return false
  }

  isWeakTo(pokemon) {
    if (this.type === 'Fire' && pokemon.type === 'Water') {
      return true
    } else if (this.type === 'Water' && pokemon.type === 'Grass') {
      return true
    } else if (this.type === 'Grass' && pokemon.type === 'Fire') {
      return true
    }
    return false
  }
}

class Fire extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move)
    this.type = "Fire"
  }
}

class Water extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move)
    this.type = "Water"
  }
}

class Grass extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move)
    this.type = "Grass"
  }
}

class Normal extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move)
    this.type = "Normal"
  }
}

class Charmander extends Fire {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move)
    this.move = "Ember"

  }
}

class Squirtle extends Water {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move)
    this.move = "Water gun"
  }
}

class Bulbasaur extends Grass {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move)
    this.move = "Vine whip"
  }
}

class Rattata extends Normal {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move)
    delete this.move
  }
}

class Pokeball {
  constructor() {
    this.storage = ''
  }
  throw(pokemon) {
    if (this.storage === '') {
      this.storage = pokemon.name
      console.log(`you caught ${this.storage}`)
    }
    console.log(`Pokeball is occupied - the pokemon could not be captured`)
  }
  isEmpty() {
    if (this.storage === '') {
      return true
    }
    return false
  }
  contains() {
    if (this.storage === '') {
      return 'empty...'
    }
    return this.storage
  }
}

class Trainer {
  constructor() {
    this.belt = []
  
  }
  catch(pokemon) {
    if (this.belt.length < 6) {
      const pokeball = new Pokeball()
      pokeball.throw(pokemon)
      this.belt.push(pokeball.storage)
    }
  console.log(`All your pokeballs have been used up!`)
  }
  getPokemon(pokemon) {
    if (!this.belt.includes(pokemon.name)) {
      const pokeball = new Pokeball()
      pokeball.throw(pokemon)
      this.belt.push(pokeball.storage)
      console.log(this.belt)
    } else {console.log('You have already caught this pokemon!')}
    
  }
}

module.exports = {Pokemon, Fire, Water, Grass, Normal, Charmander, Squirtle, Bulbasaur, Rattata, Pokeball, Trainer}


