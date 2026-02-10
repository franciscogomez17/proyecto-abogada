var pool = require('./bd');

async function getConsultas() {
    var query = "select * from consultas order by id desc";
    var rows = await pool.query(query);
    return rows;
}

//para recibir las consultas del formulario
async function insertConsulta(obj) {
    try {
        var query = "insert into consultas set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteConsultaById(id) {
    var query = "delete from consultas where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getConsultaById(id) {
    var query = "select * from consultas where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarConsultaById(obj, id) {
    try {
        var query = "update consultas set ? where id = ? ";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    }catch {
        throw(error);
    }
}

module.exports = { getConsultas, deleteConsultaById, insertConsulta, getConsultaById, modificarConsultaById };