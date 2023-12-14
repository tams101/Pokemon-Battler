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

module.exports = {Pokemon, Fire, Water, Grass, Normal}