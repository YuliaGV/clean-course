import axios from 'axios';


//Adapter pattern
export class HttpClient{

    async get(url: string){
        const { data, status } = await axios.get(url);
        return {data, status}
    }

}