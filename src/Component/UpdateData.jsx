import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
const UpdateData = () => {
    let[name , setName] = useState('')
    // let[contact, setContact] = useState('')
    let[age, setAge] = useState('')
    let[email, setEmail] =useState('')
    // let[password, setPassword] = useState('')
    let[btn,setBtn] = useState('')
    let{id} = useParams()
    let navigate = useNavigate()
    let nameHandler = (e)=>{
        e.preventDefault();
        setName(e.target.value);
    }
    // let contactHandler = (e)=>{
    //     e.preventDefault();

    //     setContact(e.target.value);
    // }
    let ageHandler = (e)=>{
        e.preventDefault();
        setAge(e.target.value);
    }
    let emailHandler = (e) =>{
        e.preventDefault();
        setEmail(e.target.value);
    }
    // let passwordHandler = (e) =>{
    //     e.preventDefault();
    //     setPassword(e.target.value);
    // }
    
    let getUser = async()=>{
        try{
            let response = await axios.get(`http://localhost:3000/students/${id}`)
            setName(response.data.name)
            setAge(response.data.age)
            // setContact(response.data.contact)
            setEmail(response.data.email)
            // setPassword(response.data.password)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getUser()
    },[id])


    let btnHandler = async (e)=>{
        e.preventDefault();
        // console.log(name,email,contact,password,age)
        let payload = {name,email,age};
        try{
            await axios.put(`http://localhost:3000/students/${id}`, payload);
        } catch (err){
            console.log(err);
        }
        setName('');
        setAge('');
        // setPassword('');
        // setContact('');
        setEmail('');
        navigate('/allusers')
    }

return (
  <div className="min-h-screen w-full flex justify-center items-center p-4 bg-gray-900">

    <form
      className="w-full max-w-md mx-auto border rounded-lg p-6 sm:p-8 bg-gray-500"
      onSubmit={btnHandler}
    >

      <h1 className="text-2xl font-bold text-center ">
        Edit User
      </h1>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="name" className="font-semibold">
          Name:
        </label>

        <input
          id="name"
          type="text"
          required
          placeholder="Enter your name"
          className="w-full border rounded-md p-3 outline-none focus:ring-2"
          value={name}
          onChange={nameHandler}
        />
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="age" className="font-semibold">
          Age:
        </label>

        <input
          id="age"
          type="number"
          placeholder="Enter your age"
          className="w-full border rounded-md p-3 outline-none focus:ring-2"
          value={age}
          onChange={ageHandler}
        />
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <label htmlFor="email" className="font-semibold">
          Email:
        </label>

        <input
          id="email"
          type="email"
          required
          placeholder="Enter your email"
          className="w-full border rounded-md p-3 outline-none focus:ring-2"
          value={email}
          onChange={emailHandler}
        />
      </div>

      <button
        className="w-full border rounded-md p-3 font-semibold cursor-pointer text-white bg-green-500"
        type="submit"
      >
        Edit User
      </button>

    </form>
  </div>
);

}
export default UpdateData
