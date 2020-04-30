import axios from 'axios';

const baseUrl = "http://localhost:64813/api/";

export default {
    usuartopsioRutas(url = baseUrl + 'Tops/') {
        return {
            fetchById: id => axios.get(url + id)
        }
    }
}