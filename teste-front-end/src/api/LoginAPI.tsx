import axios from "axios";

const conexao = axios.create({
    baseURL: 'http://localhost:8080/'
});

export default class LoginAPI {

    public static logarUsuario(nomeUsuario: string, email: string) {
        return conexao.post('/login', {nomeUsuario, email});
    }

}