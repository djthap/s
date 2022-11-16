import axios from "axios";

export async function CreateProject(data){
   
    try
    {
        const response = await axios.post(`https://api.neuronwebs.com/api/project/`,
            data    
        );
        return response.data;
    }catch(e){
        return {
            error:e
        }
        
    }
}
export async function GetProject(data){
   
    try
    {
        const response = await axios.get(`https://api.neuronwebs.com/api/project/?vendor_username=${data}`
            
        );
        return response.data;
    }catch(e){
        return {
            error:e
        }
        
    }
}


export async function SearchServiceProvider(data){
   
    try
    {
        const response = await axios.get(`https://api.neuronwebs.com/api/serviceprovider/?search=${data}`)
        return response.data;
    }catch(e){
        return {
            error:e
        }
        
    }
}