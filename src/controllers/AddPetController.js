const { getConnection } = require('../connection.js');
const connection = getConnection();

module.exports = {

    async index(request, response)
    {
        const {nome, data_cadastro, link_foto, tipo_animal, raca, sexo, porte, vacinado, castrado, vermifugado, contato, biografia, id_dono} = request.query;

        // connection.connect();

        let query = `INSERT INTO PET (NOME, DATA_CADASTRO, LINK_FOTO, TIPO_ANIMAL, RACA, SEXO, PORTE, VACINADO, CASTRADO, VERMIFUGADO, CONTATO, BIOGRAFIA, ID_DONO)`;
        query += `VALUES ('${nome}', '${data_cadastro}', '${link_foto}', '${tipo_animal}', '${raca}', '${sexo}', '${porte}', '${vacinado}', '${castrado}', '${vermifugado}', '${contato}', '${biografia}', '${id_dono}')`;

        console.log(query)

        connection.query(query, function (error, results, fields) {
            if (error) 
                return response.json({ status: 404, message: error.message });
                
            return response.json({status: 200, message: results});
        });

        // connection.end();
    },
};