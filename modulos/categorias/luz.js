const Table = require('cli-table');
const table = new Table();

const mes = require('../meses');
const { incluir, consultar } = require('./../mongodb/crud');

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
    table.push({ [arr_cabecalho[3]]: `${respostas.consumo} kwh` });
    table.push({ [arr_cabecalho[4]]: respostas.data_leitura.toUpperCase() });
    table.push({ [arr_cabecalho[5]]: respostas.data_emissao.toUpperCase() });
    table.push({ [arr_cabecalho[6]]: respostas.data_vencimento.toUpperCase() });
    table.push({ [arr_cabecalho[7]]: respostas.data_proxima_leitura.toUpperCase() });
    table.push({ [arr_cabecalho[8]]: respostas.check_pagamento ? "PAGO" : "PENDENTE" });

    console.log(table.toString());
};

const dataBase = (dados) => {
    const despesa = {
        categoria: dados.categoria.toUpperCase(),
        empresa: dados.empresa.toUpperCase().replace(" ", "_"),
        mes: {
            [mes(dados.data_emissao).toLocaleUpperCase()]: {
                valor: dados.valor,
                consumo: dados.consumo,
                data_leitura: dados.data_leitura,
                data_emissao: dados.data_emissao,
                data_vencimento: dados.data_vencimento,
                data_proxima_leitura: dados.data_proxima_leitura,
                check_pagamento: dados.check_pagamento ? "PAGO" : "PENDENTE"
            }
        }
    };
    incluir(despesa);
};

const fn_luz = (dados) => {
    dataBase(dados);
    tabela(dados);
};

module.exports = fn_luz;