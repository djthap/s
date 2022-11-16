import axios from "axios";

export async function logIn(data){
   
    try
    {
        const response = await axios.post(`https://api.neuronwebs.com/api/login/`,
            data    
        );
        return response.data;
    }catch(e){
        return {

            error:e
        }
        
    }
}
export async function SignUp(data){
   
    try
    {
        const response = await axios.post(`https://api.neuronwebs.com/api/signup/`,
            data    
        );
        return response.data;
    }catch(e){
        return {

            error:e
        }
        
    }
}