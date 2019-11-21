const program = require('commander');
const inquirer = require('inquirer');

const fn_luz = require('./modulos/categorias/luz');
const fn_agua = require('./modulos/categorias/agua');
const fn_internet = require('./modulos/categorias/internet');
const { perguntas_luz_ou_agua, perguntas_internet } = require('./modulos/perguntas');

const luz = (perguntas) => {
    inquirer.prompt(perguntas).then(respostas => {
        fn_luz(respostas);
    });
};

const agua = (perguntas) => {
    inquirer.prompt(perguntas).then(respostas => {
        fn_agua(respostas);
    });
};

const internet = (perguntas) => {
    inquirer.prompt(perguntas).then(respostas => {
        fn_internet(respostas);
    });
};

program
    .option('-l, --luz', 'Despesa de Luz')
    .option('-a, --agua', 'Despesa de Água')
    .option('-i, --internet', 'Despesa de Internet');

program.parse(process.argv);

if (program.luz) {
    luz(perguntas_luz_ou_agua);
};

if (program.agua) {
    agua(perguntas_luz_ou_agua);
};

if (program.internet) {
    internet(perguntas_internet);
};