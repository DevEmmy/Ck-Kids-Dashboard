import axios from "axios";
import {notify, notifyError} from "./toastify";
import { parse } from 'cookie';
//"http://localhost:4030"
const api = "https://ck-onboarding.onrender.com"
const kidsDashboard = "https://ck-kids-dashboard.vercel.app/"

const getCookie = ()=>{

}

export const studentLogin = async (email, password, router)=>{
    await axios.post(`${api}/student/sign-in`, {
        email, password
    })
    .then(response => {
        // console.log(document.cookie.includes('token'))
        const {student} = response.data.payload;
        localStorage.setItem("student", JSON.stringify(student))
        console.log(student);
        router.push("/kids-dashboard");

        notify(response.data.message)
        // window.location.href = "/kids-dashboard"
    })
    .catch(err => {
        notifyError(err.response.data.message)
        console.log(err)}
    )
}



export const schoolLogin = (email, password)=>{
    axios.post(`${api}/school/sign-in`, {
        email, password
    })
    .then(response => {
        console.log(response.data)
        notify(response.data.message)
    })
    .catch(err => {
        notifyError(err.response.data.message)
        console.log(err)}
    )
}

export const studentRegister = async (fullName, email, productKey, password)=>{
    console.log(fullName)
    await axios.post(`${api}/student/sign-up`, {
        email, password, fullName, productKey
    })
    .then(response => {
        console.log(response.data)
        notify(response.data.message)
        if(response.data.payload){
            window.location.href = "/signin"
        }
    })
    .catch(err => {
        notifyError(err.response.data.message)
        console.log(err)
    })
}

export const schoolRegister = async (schoolName, email, password)=>{
   await axios.post(`${api}/school/sign-up`, {
        email, password, schoolName
    })
    .then(response => {
        console.log(response.data)
        notify(response.data.message)
        if(response.data.payload){
            window.location.href = "/signin"
        }
    })
    .catch(err => {
        notifyError(err.response.data.message)
        console.log(err)
    })
}

export const getMyDetails = ()=>{
    let student = localStorage.getItem("student")
    student = JSON.parse(student)
    return student
 }