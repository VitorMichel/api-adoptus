const { getConnection } = require('../connection.js');
const connection = getConnection();

module.exports = {

    async index(request, response)
    {
        const {id_dono} = request.query;

        // connection.connect();

        console.log(`SELECT * FROM PET WHERE ID_DONO = ${id_dono};`);

        connection.query(`SELECT * FROM PET WHERE ID_DONO = ${id_dono};`, function (error, results, fields) {
            if (error) 
                return response.json({ status: 404, message: error.message });
                
            return response.json({status: 200, message: results});
        });

        // connection.end();
    },
};