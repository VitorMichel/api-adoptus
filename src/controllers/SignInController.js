const { getConnection } = require('../connection.js');
const connection = getConnection();

module.exports = {

    async index(request, response)
    {
        const {login, senha} = request.body;

        console.log(`SELECT * FROM USUARIO WHERE LOGIN = '${login}' AND SENHA = '${senha}'`);

        // connection.connect();

        connection.query(`SELECT * FROM USUARIO WHERE LOGIN = '${login}' AND SENHA = '${senha}'`, function (error, results, fields) {
            if (error) 
                return response.json({ status: 404, message: error.message });

            return response.json({status: 200, message: results});
        });

        // connection.end();
    },
};






// connection.connect(function(err){
        //     if(err) throw err;
        //     connection.query(`SELECT * FROM USUARIO WHERE LOGIN = '${login}' AND SENHA = '${senha}'`, function(err, result, fields){
        //         if(err) throw err;
        //         console.log(`SELECT * FROM USUARIO WHERE LOGIN = '${login}' AND SENHA = '${senha}'`);
        //         console.log(result);
        //         return response.json({status: 200, message: result});
        //     })
        // })
        // connection.end();