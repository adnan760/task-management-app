import axios from 'axios'

const baseUrl = 'https://post-center-project.herokuapp.com/'

export default {
    postMessage(url = baseUrl +'postsMessages/')
    {
        return{
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url,newRecord),
            update: (id,updatedRecord) => axios.put(url+id,updatedRecord),
            delete: id => axios.delete(url +id)

        }
    }
}