// Importar a dependência Axios para conectar com a API
import axios from "axios";

// Criar a instância de conexão HTTP
const api = axios.create({
    baseURL: 'http://192.168.1.5:8080'
});

// Exporta a instância configurada do Axios
export default api;