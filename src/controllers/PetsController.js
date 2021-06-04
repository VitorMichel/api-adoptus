const { getConnection } = require('../connection.js');
const connection = getConnection();

module.exports = {

    async index(request, response)
    {
        // connection.connect();

        console.log(`SELECT * FROM PET;`);

        connection.query(`SELECT * FROM PET;`, function (error, results, fields) {
            if (error) 
                return response.json({ status: 404, message: error.message });
                
            return response.json({status: 200, message: results});
        });

        // connection.end();
    },
};