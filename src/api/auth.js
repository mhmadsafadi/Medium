import axios from 'axios';

export const signup = async(data) =>{
    try {
        const response = await axios.post('https://medium0clone.herokuapp.com/api/user/signup',{
            ...data
        });
        return {
            data:response,
            kind:"OK"
        };
    } catch (error) {
        console.log("error in signup api", error.response.data.data[0].message)
        
        return {
            error: error.response.data.data[0].message,
            kind:"REJECT"
        };
    }
}



export const verfiyEmail = async(data) =>{
    try {
        const response = await axios.post('https://medium0clone.herokuapp.com/api/user/verify/email',{
            ...data
        });
        return response;
    } catch (error) {
        console.log("error in vefiyEmail api", error)
        return error;
    }
}




export const login = async(data) =>{
    try {
        const response = await axios.post('https://medium0clone.herokuapp.com/api/user/login',{
            ...data
        });
        return response;
    } catch (error) {
        console.log("error in login api", error)
        return error;
    }

}


export const sendVerfiy = async(data) =>{
    try {
        const response = await axios.post('https://medium0clone.herokuapp.com/api/user/verify/send',{
            ...data
        });
        return response;
    } catch (error) {
        console.log("error in sendVerfiy api", error)
        return error;
    }

}