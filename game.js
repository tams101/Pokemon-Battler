const inquirer = require("inquirer");
const {
  Trainer,
  Battle,
  Charmander,
  Squirtle,
  Bulbasaur,
} = require("./pokemon-battler");

console.log("WELCOME TO POKEMON BATTLER!");

const firstQuestions = [
  {
    type: "input",
    name: "name",
    message: "Hi there, what is your name?",
    default: "Ash",
  },
  {
    type: "list",
    name: "pokemon",
    message: "Choose your pokemon!",
    choices: ["Charmander", "Squirtle", "Bulbasaur"],
  },
  {
    type: "input",
    name: "pokemonName",
    message: "Give your pokemon a name",
    default: "Player's Pokemon"
  },
  {
    type: "input",
    name: "opponentsName",
    message: "Your opponent has arrived, what is their name?",
    default: "Gary",
  },
  {
    type: "list",
    name: "opponentsPokemon",
    message: "Which pokemon does your opponent choose?",
    choices: ["Charmander", "Squirtle", "Bulbasaur"],
  },
  {
    type: "input",
    name: "oppPokemonName",
    message: "What is your opponent's pokemon name?",
    default: "Opponent's Pokemon"
  },
];

const secondQuestions = [
  {
    type: "list",
    name: "choices",
    message: "What will you do?",
    choices: ["Fight", "Run Away"],
  },
];

function playGame() {
  let player;
  let opponent;
  let playerPokemon;
  let opponentsPokemon;

  inquirer
    .prompt(firstQuestions)
    .then(function (firstAnswers) {
      //Create player trainer object
      player = new Trainer(firstAnswers.name);
      
      //Creater player pokemon
      if (firstAnswers.pokemon === "Charmander") {
        playerPokemon = new Charmander(firstAnswers.pokemonName);
      } else if (firstAnswers.pokemon === "Squirtle") {
        playerPokemon = new Squirtle(firstAnswers.pokemonName);
      } else if (firstAnswers.pokemon === "Bulbasaur") {
        playerPokemon = new Bulbasaur(firstAnswers.pokemonName);
      }

      //Add pokemon to player's belt
      player.catch(playerPokemon);

      //create opponent trainer object
      opponent = new Trainer(firstAnswers.opponentName);

      //Create opponent pokemon
      if (firstAnswers.opponentsPokemon === "Charmander") {
        opponentsPokemon = new Charmander(firstAnswers.oppPokemonName);
      } else if (firstAnswers.opponentsPokemon === "Squirtle") {
        opponentsPokemon = new Squirtle(firstAnswers.oppPokemonName);
      } else if (firstAnswers.opponentsPokemon === "Bulbasaur") {
        opponentsPokemon = new Bulbasaur(firstAnswers.oppPokemonName);
      }

      //Add pokemon to opponent's belt
      opponent.catch(opponentsPokemon);

      return inquirer.prompt(secondQuestions);
    })
    .then(function (secondAnswers) {
      if (secondAnswers.choices === "Fight") {
        const battle = new Battle(
          player,
          opponent,
          playerPokemon.name,
          opponentsPokemon.name
        );
        console.log(battle.fight());
      } else {
        console.log("You ran away!");
      }
    });
}

playGame();
