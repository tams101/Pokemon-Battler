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
    this.storage = {}
  }
  throw(pokemon) {
    if (!this.storage.hasOwnProperty('name')) {
      this.storage = pokemon
      console.log(`you caught ${this.storage.name}`)
    }
    console.log('Pokeball is occupied - the pokemon could not be captured')
  }
  isEmpty() {
    if (!this.storage.hasOwnProperty('name')) {
      return true
    }
    return false
  }
  contains() {
    if (!this.storage.hasOwnProperty('name')) {
      return 'empty...'
    }
    return this.storage.name
  }
}

class Trainer {
  constructor() {
    this.belt = []
   // this.pokeballs = []
  }
  catch(pokemon) {
    if (this.belt.length < 6) {
      const newPokeball = new Pokeball
      newPokeball.throw(pokemon)
      this.belt.push(newPokeball.storage)
      
      }
      console.log(`All your pokeballs have been used up!`)
      
    }
  
  getPokemon(pokemon) {
    
    if(this.belt.includes(pokemon)) {
      console.log('You have already caught this pokemon!')
      return pokemon
    }
    else if (!this.belt.includes(pokemon)) {
      const pokeball = new Pokeball()
      pokeball.throw(pokemon)
      this.belt.push(pokeball.storage)
      console.log(this.belt)
    } else {console.log('You have already caught this pokemon!')}
    
  }}

  class Battle {
    constructor(trainer1, trainer2) {
      this.pokemon1 = trainer1.belt[0]
      this.pokemon2 = trainer2.belt[0]

    }

    fight() {
      this.attack()
      // let pokemon1HP = this.pokemon1.hitPoints
      // let pokemon2HP = this.pokemon2.hitPoints
      // let pokemon1AttackDmg = this.pokemon1.attackDamage
      // let pokemon2AttackDmg = this.pokemon2.attackDamage
      // if (this.pokemon1.hasFainted()) {
      //   return `${this.pokemon2.name} wins!`
      // } else if (this.pokemon2.hasFainted()) {
      //   return `${this.pokemon1.name} wins!`
      // }
      // //Pokemon 1 attacks Pokemon 2
      // this.pokemon2.hitPoints = this.pokemon2.takeDamage(this.pokemon1.useMove())
  
      for(let i = 0; i < 20; i++) {
        //Pokemon 1 attacks Pokemon 2
        this.pokemon2.hitPoints = this.pokemon2.takeDamage(this.pokemon1.useMove())
          console.log(this.pokemon2.hitsPoints)
      
        //Check if Pokemon 2 has fainted
        if (this.pokemon2.hasFainted()) {
          return `${this.pokemon1.name} wins!`
        } 
        //Pokemon 2 attacks Pokemon 1
          this.pokemon1.hitPoints = this.pokemon1.takeDamage(this.pokemon2.useMove())

          //Check if Pokemon 1 has fainted
        if (this.pokemon1.hasFainted()) {
          return `${this.pokemon2.name} wins!`
        } 
        }
        
          
        }
        

      // console.log(`${this.pokemon1.name} attacked ${this.pokemon2.name} with ${this.pokemon1.move}, ${this.pokemon2.name}'s HP was reduced by ${this.pokemon1.attackDamage}. The opponent's HP is now ${this.pokemon2.hitPoints}`)
    
    attack() {
     if (this.pokemon1.isEffectiveAgainst(this.pokemon2)) {
      this.pokemon1.attackDamage * 1.25
     } else if (this.pokemon2.isEffectiveAgainst(this.pokemon1)) {
      this.pokemon2.attackDamage * 1.25
     }

     if (this.pokemon1.isWeakTo(this.pokemon2)) {
      this.pokemon1.attackDamage * 0.75
     } else if (this.pokemon2.isWeakTo(this.pokemon1)) {
      this.pokemon2.attackDamage * 0.75
     }
    }

    /*
    pokemon1Turn() {
      
      for (let i = this.pokemon1.hitPoints; i > 0; i--) {
        //Pokemon 1 attacks Pokemon 2
        this.pokemon2.hitPoints = this.pokemon2.takeDamage(this.pokemon1.useMove())
      }
      //Check if Pokemon 2 has fainted
      if (this.pokemon2.hasFainted()) {
        return `${this.pokemon1.name} wins!`
      }
    }

    pokemon2Turn() {
      for (let i = this.pokemon2.hitPoints; i > 0; i--) {
        //Pokemon 2 attacks Pokemon 1
        this.pokemon1.hitPoints = this.pokemon1.takeDamage(this.pokemon2.useMove())
      }
      //Check if Pokemon 1 has fainted
      if (this.pokemon1.hasFainted()) {
        return `${this.pokemon2.name} wins!`
      }
     
    } */}
  
module.exports = {Pokemon, Fire, Water, Grass, Normal, Charmander, Squirtle, Bulbasaur, Rattata, Pokeball, Trainer, Battle}


