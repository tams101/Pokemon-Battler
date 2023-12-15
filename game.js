const inquirer = require('inquirer');
const classes = require('./pokemon-battler')
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
const Battle = classes.Battle;

const firstQuestions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      default: 'Ash',
    },
    {
      type: 'list',
      name: 'pokemon',
      message: 'Which pokemon do you choose?',
      choices: ['Squirtle', 'Bulbasaur'],
    },
    {
      type: 'list',
      name: 'choices',
      message: 'What will you do?',
      choices: ['Fight', 'Run Away'],
  }
    // etc...
  ];
  
  const secondQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        default: 'Ash',
      },
      {
        type: 'list',
        name: 'pokemon',
        message: 'Which pokemon do you choose?',
        choices: ['Charmander', 'Bulbasaur'],
      },
      {
        type: 'list',
        name: 'choices',
        message: 'What will you do?',
        choices: ['Fight', 'Run Away'],
    }
    //... see examples to how to format questions
  ];

  
  function playGame() {
    inquirer
      .prompt(firstQuestions)
      .then(function (firstAnswers) {
        const trainer1 = new Trainer(firstAnswers.name)
        trainer1.catch(firstAnswers.pokemon)
        console.log(trainer1)
        // do stuff with the answers to the firstQuestions, e.g. create trainers and catch pokemon
        console.log(firstAnswers);
        return inquirer.prompt(secondQuestions);
      })
      .then(function (secondAnswers) {
        const trainer2 = new Trainer(secondAnswers.name)
        trainer2.catch(secondAnswers.pokemon)
        console.log(trainer2)
        // do stuff with the answers to the secondQuestions, e.g. choose moves to use / fight / run away / select pokemon to fight with
        console.log(secondAnswers);
        return inquirer.prompt(thirdQuestions);
        })
      .then(function (thirdAnswers) {
        if(secondAnswers.choices === 'Fight') {
          const battle = new Battle(firstAnswers.name, secondAnswers.name, firstAnswers.pokemon, secondAnswers.pokemon)
            
        console.log(battle.fight())
      }})
  }
  
  playGame();