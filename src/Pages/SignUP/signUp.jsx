import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Components/firebase/firebase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [eye, setEye] = useState(false);
    const [err, setErr] = useState(false)
    const [email, setEmail] = useState('')
    const [username , setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const inputType = 'password'
    const inputType2 = 'text'
    const handleLogin = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate('/login')       
            })
            .catch((err) => {
                setErr(true)
            });

    }

    return (
        <LoginPage>
            <form onSubmit={handleLogin} className='form'>
                <span>
                    <input
                        type="gmail"
                        placeholder='Enter your Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </span>
                <span>
                    <input
                        type="text"
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </span>
                <span>
                    <input
                        type={eye === false ? inputType : inputType2}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {


                        eye == true
                            ?
                            <i class="bi bi-eye" onClick={() => setEye(prev => !prev)}></i>
                            :
                            <i class="bi bi-eye-slash " onClick={() => setEye(prev => !prev)}></i>
                    }
                </span>
                <span>
                    <input
                        type={eye === false ? inputType : inputType2}
                        placeholder='Confirm Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {


                        eye == true
                            ?
                            <i class="bi bi-eye" onClick={() => setEye(prev => !prev)}></i>
                            :
                            <i class="bi bi-eye-slash " onClick={() => setEye(prev => !prev)}></i>
                    }
                </span>
                {/* <div>
                        <input type="checkbox" name="" id="" />
                        <p>I agree with 
                            <span className='cspan'>privacy</span>
                             and 
                             <span className='cspan'>policy</span>
                             </p>
                </div> */}
                <button type='submit'>Submit</button>
                {err && <span className='wrong'>Wrong email or password !!!</span>}
            </form>
        </LoginPage>
    );
}

export default Login;


const LoginPage = styled.div`
   width: 100%;
   height: 100vh;
   color: white;
   background-color: #230E2B;
   display: flex;
   justify-content: center;
   align-items: center ;
   position: absolute;
   top: 0;
   z-index: 1;
   form{
   display: flex;
   flex-direction: column;
   gap: 10px;
    .cspan{
    color: red;
    }
   }
  
   .a1{
        color: #AA879F;
       }
   a{
       color: #565363;
       transition: all .4s;
       &:hover{
        color: #474552;
       }
       
   }
 
   .wrong{
    margin: auto;
    color: red;
   }
   .a{
    text-decoration: none;
    list-style: none;
    color:'red';
    margin: auto;
   }
   button{
    background: linear-gradient(90deg, #FFC700 0%, #FF005C 100%);
    z-index: 1;
    padding: 15px 30px;
    border-radius: 30px;
    transition: all .5s;
    color:white;
    position: relative;
    &::before{
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        opacity: 0;
        transition: opacity 0.6s;
        z-index: -1;
        background: linear-gradient(90deg, #EE0979 0%, #FFC700 100%);
    }
    &:hover::before{
        opacity: 1;
    }
   }
   span{
    position: relative;
    i{
        position: absolute;
        right: 5%;
        top: 28%;
        cursor: pointer;
    }
   }
   }
   input{
    width: 300px;
    padding: 15px 30px;
    border-radius: 30px;
    margin: auto;
    background-color: #42204E;
    border: none;
    outline: none;
    color: #8B5D9A;
    &:focus{
        color: #8B5D9A;
    }
   }
   @media screen and (max-width: 768px) {
    .form{
        gap: 20px;
    }
   }`
