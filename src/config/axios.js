import axios from "axios";
const clienteAxios = axios.create({
  baseURL: "http://localhost:64813",
});

export default clienteAxios;
