var pool = require('../bd'); 

async function getConsultas() {
    try {
        var query = 'select * from consultas order by id desc';
        var [rows] = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function insertConsulta(obj) {
    try {
        var query = "insert into consultas set ?";
        var [rows] = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getConsultas, insertConsulta };