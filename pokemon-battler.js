class Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
  }

  takeDamage(num) {
    this.hitPoints -= num;
    return this.hitPoints;
  }

  useMove() {
    console.log(`${this.name} used ${this.move}!`);
    return this.attackDamage;
  }

  hasFainted() {
    if (this.hitPoints <= 0) {
      return true;
    } else {
      return false;
    }
  }

  isEffectiveAgainst(pokemon) {
    if (this.type === "Fire" && pokemon.type === "Grass") {
      return true;
    } else if (this.type === "Grass" && pokemon.type === "Water") {
      return true;
    } else if (this.type === "Water" && pokemon.type === "Fire") {
      return true;
    }
    return false;
  }

  isWeakTo(pokemon) {
    if (this.type === "Fire" && pokemon.type === "Water") {
      return true;
    } else if (this.type === "Water" && pokemon.type === "Grass") {
      return true;
    } else if (this.type === "Grass" && pokemon.type === "Fire") {
      return true;
    }
    return false;
  }
}

class Fire extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "Fire";
  }
}

class Water extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "Water";
  }
}

class Grass extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "Grass";
  }
}

class Normal extends Pokemon {
  constructor(name, hitPoints, attackDamage, move) {
    super(name, hitPoints, attackDamage, move);
    this.type = "Normal";
  }
}

class Charmander extends Fire {
  constructor(name, hitPoints, attackDamage) {
    super(name, 44, 17);
    this.move = "Ember";
  }
}

class Squirtle extends Water {
  constructor(name, hitPoints, attackDamage) {
    super(name, 44, 16);
    this.move = "Water gun";
  }
}

class Bulbasaur extends Grass {
  constructor(name, hitPoints, attackDamage) {
    super(name, 45, 16);
    this.move = "Vine whip";
  }
}

class Rattata extends Normal {
  constructor(name, hitPoints, attackDamage) {
    super(name, 40, 15);
    this.move = "Bite"
  }
}

class Pokeball {
  constructor() {
    this.storage = {};
  }
  throw(pokemon) {
    if (!this.storage.hasOwnProperty("name")) {
      this.storage = pokemon;
      console.log(`you caught ${this.storage.name}`);
    }
    else {console.log("Pokeball is occupied - the pokemon could not be captured");}
  }
  isEmpty() {
    if (!this.storage.hasOwnProperty("name")) {
      return true;
    }
    return false;
  }
  contains() {
    if (!this.storage.hasOwnProperty("name")) {
      return "empty...";
    }
    return this.storage.name;
  }
}

class Trainer {
  constructor() {
    this.belt = [];
    // this.pokeballs = []
  }
  catch(pokemon) {
    if (this.belt.length < 6) {
      const newPokeball = new Pokeball();
      newPokeball.throw(pokemon);
      this.belt.push(newPokeball.storage);
    }
    else {console.log(`All your pokeballs have been used up!`);}
  }

  getPokemon(pokemon) {
    if (this.belt.includes(pokemon)) {
      console.log("You have already caught this pokemon!");
      return pokemon;
    } else if (!this.belt.includes(pokemon)) {
      const pokeball = new Pokeball();
      pokeball.throw(pokemon);
      this.belt.push(pokeball.storage);
      console.log(this.belt);
    } else {
      console.log("You have already caught this pokemon!");
    }
  }
}

class Battle {
  constructor(trainerOne, trainerTwo, trainerOnePokemon, trainerTwoPokemon) {
    this.trainerOnePokemon = trainerOne.belt.find((pokemon) => pokemon.name === trainerOnePokemon);
    this.trainerTwoPokemon = trainerTwo.belt.find((pokemon) => pokemon.name === trainerTwoPokemon);
  }

  fight() {
    this.attack()

    let playersTurn = true;

    //Pokemon take turns attacking as long as both pokemon still have HP left
    while (!this.trainerOnePokemon.hasFainted() && !this.trainerTwoPokemon.hasFainted()) {
      if (playersTurn === true) {
        console.log(`It's ${this.trainerOnePokemon.name}'s turn`)
        this.trainerTwoPokemon.hitPoints = this.trainerTwoPokemon.takeDamage(this.trainerOnePokemon.useMove());

        if (this.trainerOnePokemon.isEffectiveAgainst(this.trainerTwoPokemon)) {
          console.log(`${this.trainerOnePokemon.move} is super effective!`);
        } else {
          console.log(`${this.trainerOnePokemon.move} is not effective`);
        }

        if(this.trainerTwoPokemon.hitPoints > 0) {
          console.log(`${this.trainerTwoPokemon.name} has ${this.trainerTwoPokemon.hitPoints} HP left!`);
        }
      
        playersTurn = false

        //Check if Pokemon 2 has fainted
        if (this.trainerTwoPokemon.hasFainted()) {
          console.log(`${this.trainerTwoPokemon.name} has fainted!`)
        }
      } 
      
      else {
        console.log(`${this.trainerTwoPokemon.name}'s turn`)
        this.trainerOnePokemon.hitPoints = this.trainerOnePokemon.takeDamage(this.trainerTwoPokemon.useMove());
        
        if (this.trainerTwoPokemon.isEffectiveAgainst(this.trainerOnePokemon)) {
          console.log(`${this.trainerTwoPokemon.move} is super effective!`);
        } else {
          console.log(`${this.trainerTwoPokemon.move} is not effective`);
        }
        
        if(this.trainerOnePokemon.hitPoints > 0) {
          console.log(`${this.trainerOnePokemon.name} has ${this.trainerOnePokemon.hitPoints} HP left!`);
        }

        playersTurn = true

        if (this.trainerOnePokemon.hasFainted()) {
          console.log(`${this.trainerOnePokemon.name} has fainted!`)
        }
      }
      }
      
      if (this.trainerOnePokemon.hasFainted()) {
        return `${this.trainerTwoPokemon.name} wins!`;
      } else {
        return `${this.trainerOnePokemon.name} wins!`;
      }
  }

  attack(){
    if (this.trainerOnePokemon.isEffectiveAgainst(this.trainerTwoPokemon)) {
      this.trainerOnePokemon.attackDamage *= 1.25;
    } else if (this.trainerTwoPokemon.isEffectiveAgainst(this.trainerOnePokemon)) {
      this.trainerTwoPokemon.attackDamage *= 1.25;
    }

    if (this.trainerOnePokemon.isWeakTo(this.trainerTwoPokemon)) {
      this.trainerOnePokemon.attackDamage *= 0.75;
    } else if (this.trainerTwoPokemon.isWeakTo(this.trainerOnePokemon)) {
      this.trainerTwoPokemon.attackDamage *= 0.75;
    }
  }
}

module.exports = {
  Pokemon,
  Fire,
  Water,
  Grass,
  Normal,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  Pokeball,
  Trainer,
  Battle,
};
