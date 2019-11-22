const Table = require('cli-table');
const table = new Table();

const mes = require('../meses');

const tabela = (respostas) => {
    const arr_cabecalho = [];
    let i = 0;

    for (const key in respostas) {
        arr_cabecalho[i] = key.toUpperCase();
        i++;
    }

    table.push({ [arr_cabecalho[0]]: respostas.categoria.toUpperCase() });
    table.push({ [arr_cabecalho[1]]: respostas.empresa.toUpperCase() });
    table.push({ [arr_cabecalho[2]]: `R$ ${respostas.valor.replace(".", ",")}` });
    table.push({ [arr_cabecalho[3]]: respostas.data_solicitacao});
    table.push({ [arr_cabecalho[4]]: respostas.local_destino.toUpperCase() });
    table.push({ [arr_cabecalho[5]]: respostas.motorista.toUpperCase() });
    table.push({ [arr_cabecalho[6]]: respostas.check_pagamento ? "PAGO" : "PENDENTE" });

    console.log(table.toString());
};

const dataBase = (dados) => {
    const despesa = {
        categoria: dados.categoria.toUpperCase(),
        empresa: dados.empresa.toUpperCase().replace(" ", "_"),
        valor: dados.valor,
        data_solicitacao: dados.data_solicitacao,
        local_destino: dados.local_destino,
        motorista: dados.motorista,
        check_pagamento: dados.check_pagamento ? "PAGO" : "PENDENTE"
    };
    console.log(despesa)
};

const fn_transporte_aplicativos = (dados) => {
    dataBase(dados);
    tabela(dados);
};

module.exports = fn_transporte_aplicativos;