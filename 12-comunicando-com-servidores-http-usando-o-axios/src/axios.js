import axios from "axios";
import config from "@/config/config";

const instance = axios.create({})

instance.defaults.baseURL = config.apiUrl

instance.interceptors.request.use(config => {
    console.log('Interceptando requisição: ', config)
    config.data = {
        ...config.data,
        curso: 'Vue JS'
    }

    /* config.headers.common['Authorization'] = `Bearer token_jwt`
    config.headers.post['Meu-Cabecalho']= 'Curso VueJs' */

    return config
    /* return new Promise((resolve) => {
        console.log('Fazendo requisição aguardar')
        setTimeout(() => {
            console.log('Enviando requisição...')
            resolve(config)
        }, 2000)
    }) */
}, error => {
    console.log('Erro ao fazer requisição: ', error)
    return Promise.reject(error)
})

instance.interceptors.response.use(response => {
    console.log('Interceptando resposta... ', response)
    if(Array.isArray(response.data)){
        response.data = response.data.slice(1, 3)
    }
    return response
}, error => {
    console.log('Erro capturado no interceptador de respostas: ', error)
    return Promise.reject(error)
})

export default instance