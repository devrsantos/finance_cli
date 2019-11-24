const program = require('commander');
const inquirer = require('inquirer');

const fn_luz = require('./modulos/categorias/luz');
const fn_agua = require('./modulos/categorias/agua');
const fn_internet = require('./modulos/categorias/internet');
const fn_telefonia = require('./modulos/categorias/telefonia');
const fn_racao = require('./modulos/categorias/racao');
const fn_transporte_aplicativos = require('./modulos/categorias/transporte_aplicativo');

const {
    perguntas_luz_ou_agua,
    perguntas_telecomunicacoes,
    perguntas_transporte_aplicativos,
    perguntas_racao
} = require('./modulos/perguntas');

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

const telefonia = (perguntas) => {
    inquirer.prompt(perguntas).then(respostas => {
        fn_telefonia(respostas);
    });
};

const transporte_aplicativos = (perguntas) => {
    inquirer.prompt(perguntas).then(respostas => {
        fn_transporte_aplicativos(respostas);
    });
};

const racao = (perguntas) => {
    inquirer.prompt(perguntas).then(respostas => {
        fn_racao(respostas);
    });
};

program
    .option('-l, --luz', 'Despesa de Luz')
    .option('-a, --agua', 'Despesa de Água')
    .option('-i, --internet', 'Despesa de Internet')
    .option('-t, --telefonia', 'Despesa de Telefonia')
    .option('-r, --racao', 'Despesa de Racao')
    .option('-u, --transporte_aplicativos', 'Despesa de Transporte Aplicativos');

program.parse(process.argv);

if (program.luz) {
    luz(perguntas_luz_ou_agua);
};

if (program.agua) {
    agua(perguntas_luz_ou_agua);
};

if (program.internet) {
    internet(perguntas_telecomunicacoes);
};

if (program.telefonia) {
    telefonia(perguntas_telecomunicacoes);
};

if (program.transporte_aplicativos) {
    transporte_aplicativos(perguntas_transporte_aplicativos);
};

if (program.racao) {
    racao(perguntas_racao);
};