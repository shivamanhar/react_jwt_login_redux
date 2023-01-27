import axios from 'axios';

const API_URL = "http://localhost:8000/users/";


export const register = () =>{

}

export const login = (username, password)=>{
    return axios.post(API_URL+"api/token/", {
        username, password
    })
    .then((response) =>{
        if(response.data)
        {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        //console.log(response.data.access)
        //console.log(response.data.refresh)
        return response.data
    })
}

export const logout = ()=>
{
    localStorage.removeItem("user");
};

