const API_URL = "http://localhost:3017/api";


// traer consultas
export const getConsultas = async () => {
try {
const response = await fetch(`${API_URL}/consultas`);
const data = await response.json();
return data;
} catch (error) {
console.error("Error al obtener consultas:", error);
}
};

// recibir consulta
export const createConsulta = async (consulta) => {
try {
const response = await fetch(`${API_URL}/consultas`, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(consulta),
});

const data = await response.json();
return data;

} catch (error) {
console.error("Error al crear consulta:", error);
}
};
