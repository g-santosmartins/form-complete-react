import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
})

// waiting until the data is ready
async function getData(nome) {
    const response = await axiosInstance.get()
    return response.nome
}



export {axiosInstance, getData}



