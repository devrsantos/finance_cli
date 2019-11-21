const mes = (data) => {
    
    const obter_mes = data.split("/");

    switch (obter_mes[1]) {
        case "01":
            var mes_selecionado = `janeiro_${obter_mes[2]}`
            break;
        case "02":
            var mes_selecionado = `fevereiro_${obter_mes[2]}`
            break;
        case "03":
            var mes_selecionado = `março_${obter_mes[2]}`
            break;
        case "04":
            var mes_selecionado = `abril_${obter_mes[2]}`
            break;
        case "05":
            var mes_selecionado = `maio_${obter_mes[2]}`
            break;
        case "06":
            var mes_selecionado = `junho_${obter_mes[2]}`
            break;
        case "07":
            var mes_selecionado = `julho_${obter_mes[2]}`
            break;
        case "08":
            var mes_selecionado = `agosto_${obter_mes[2]}`
            break;
        case "09":
            var mes_selecionado = `setembro_${obter_mes[2]}`
            break;
        case "10":
            var mes_selecionado = `outubro_${obter_mes[2]}`
            break;
        case "11":
            var mes_selecionado = `novembro_${obter_mes[2]}`
            break;
        case "12":
            var mmes_selecionadoes = `dezembro_${obter_mes[2]}`
            break;
        default:
            var mes_selecionado = `INVALIDO`
    }
    return mes_selecionado;
}

module.exports = mes;