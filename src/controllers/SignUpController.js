const { getConnection } = require('../connection.js');
const connection = getConnection();

module.exports = {

    async index(request, response)
    {
        const {nome, login, senha, celular, email} = request.query;

        // connection.connect();

        console.log(`INSERT INTO USUARIO (NOME, LOGIN, SENHA, CELULAR, EMAIL) VALUES ('${nome}', '${login}', '${senha}', '${celular}', '${email}');`);

        connection.query(`INSERT INTO USUARIO (NOME, LOGIN, SENHA, CELULAR, EMAIL) VALUES ('${nome}', '${login}', '${senha}', '${celular}', '${email}');`, function (error, results, fields) {
            if (error) 
                return response.json({ status: 404, message: error.message });
                
            return response.json({status: 200, message: results});
        });

        // connection.end();
    },
};