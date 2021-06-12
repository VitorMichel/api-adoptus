const { getConnection } = require('../connection.js');
const connection = getConnection();

module.exports = {

    async index(request, response)
    {
        const {id_usuario, nome, celular, email} = request.query;

        // connection.connect();

        let query = ``;

        query = `UPDATE USUARIO `;
        query +=  `SET NOME = '${nome}', CELULAR = '${celular}', EMAIL = '${email}' `;
        query += `WHERE ID_USUARIO = '${id_usuario}';`

        console.log(query);

        connection.query(query, function (error, results, fields) {
            if (error) 
                return response.json({ status: 404, message: error.message });
                
            return response.json({status: 200, message: results});
        });

        // connection.end();
    },

    async pegar_dados(request,response)
    {
        const {id_usuario} = request.header;

        // connection.connect();

        console.log(`SELECT * FROM USUARIO WHERE ID_USUARIO = '${id_usuario}';`);

        connection.query(`SELECT * FROM USUARIO WHERE ID_USUARIO = '${id_usuario}';`, function (error, results, fields) {
            if (error) 
                return response.json({ status: 404, message: error.message });
                
            return response.json(results);
        });

        // connection.end();
    }
};