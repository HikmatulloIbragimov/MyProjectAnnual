import React from 'react';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Components/firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/AuthContext';


const Login = () => {
    const [eye, setEye] = useState(false);
    const [err, setErr] = useState(false)
    const [email, setEmail] = useState('')
    const [admin , setAdmin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    // const notify = () => toast.success('🦄 Wow so easy!', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Flip,
    //     });
    const { dispatch } = useContext(AuthContext);
    // const {dispatch} = useContext(AuthContext)

    const inputType = 'password'
    const inputType2 = 'text'

    const handleLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user })
                // notify()
                user.uid === 'Hirx9tyXleOu8nPKAgFq6sWatpG2' ? navigate('/admin') : navigate('/')
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
                        type={eye === false ? inputType : inputType2}
                        placeholder='Enter your Password'
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
                <button type='submit'>Submit</button>
                {err && <span className='wrong'>Wrong email or password !!!</span>}
                <p className='a' href="#">Do`nt have an Account?</p>
                <a className='a a1' href="/signup">Sign up</a>
            </form>
           
        </LoginPage>
    );
}

export default Login;


const LoginPage = styled.div`
   width: 100%;
   height:100%;
   color: white;
   background-color: #230E2B;
   display: flex;
   justify-content: center;
   align-items: center ;
   position: fixed;
   z-index: 2;
   top: 0;
   form{
   display: flex;
   flex-direction: column;
   gap: 10px;
   .a1{
        color: #AA879F;
       }

   p{
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
    outline: none;
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
   }
   
`