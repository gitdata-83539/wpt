import axios from 'axios'
const config = {
    serverUrl: 'http://localhost:4000',
  }
export async function userLogIn(email,password)
{
    const body = {email,password}
    try {
        const response=  await axios.post(`${config.serverUrl}/user/login`,body)
    return response.data
    } catch (ex) {
        console.log(`exception: `,ex)
    }
    return null
}
export async function registerUser(firstName,lastName,email,password,phone)
{
    console.log("inside function")
    try {
        
        const body={firstName,lastName,email,password,phone}
        const response= await axios.post(`${config.serverUrl}/user/register`,body)
        console.log(response.data)
        return response.data
    } catch (ex) {
        console.log(`EXCEPTION: `,ex)
    }
    return null
}
