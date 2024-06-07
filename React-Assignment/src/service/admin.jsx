import axios from 'axios'
import config from './config'

export async function register(firstName,lastName,email,password)
{ console.log("inside function")
    try {
        //post body part
        const body={firstName,lastName,email,password}

        //send request from browser
        const response= await axios.post(`${config.serverUrl}/admin/register`,body)
        
        return response.data
    } catch (ex) {
        console.log(`EXCEPTION: `,ex)
    }
    return null
}
export async function logIn(email,password)
{
    const body = {email,password}
    try {
        const response=  await axios.post(`${config.serverUrl}/admin/login`,body)
    return response.data
    } catch (ex) {
        console.log(`exception: `,ex)
    }
}