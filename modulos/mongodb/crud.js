const { MongoClient, ObjectId } = require('mongodb');

const { usuario, senha } = require('./../../keys');

const url = `mongodb://${usuario}:${senha}@ds053539.mlab.com:53539/finance_cli`;

const dbName = "finance_cli";

module.exports = {
	incluir: (dados) => {
		MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },(err, client) => {
			const db = client.db(dbName);

			db.collection("despesas").findOne({categoria : dados.categoria}).then(resposta => {
				if (resposta == "null") {
					db.collection("despesas").insertOne(dados);
					client.close();
				} else {
					db.collection("despesas").updateOne(
						{
							"mes" : {}
						},
						{
							$push : {mes : dados.mes}
						}
					);
					client.close();
				}
			});

		})
	},

	consultar: (dados) => {
		MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },(err, client) => {
			const db = client.db(dbName);

			db.collection("despesas").findOne(dados.categoria).then(resposta => {

			});

			client.close();
		})
	},

	deletar: () => {
		MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },(err, client) => {
			const db = client.db(dbName);
			
			client.close();
		})
	},

};
