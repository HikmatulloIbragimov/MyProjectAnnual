import { React, useState } from 'react';
import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";
import { NavLink } from 'react-router-dom';

const NavbarResponsive = () => {
    const [menu, setMenu] = useState(false)
    return (
        <Responsive>
            <div className='inputSearch'>
                <span>
                    <input type="text" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#925FA4" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </span>
            </div>
            <svg className='close' onClick={() => setMenu(prev => !prev)} width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path fill="white" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
            </svg>
            {
                menu == true ? <div className="Modal">
                    <svg onClick={()=> setMenu(prev => !prev)} id='close' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                    <ul>
                        {/* <Fade delay={1e1} cascade damping={1e-1}> */}
                        <li><NavLink onClick={()=> setMenu(prev => !prev)} to={'/haqida'}>Haqida <span className='span'></span></NavLink></li>
                        <li><NavLink onClick={()=> setMenu(prev => !prev)} to={'/rasm'}>Rasm <span className='span'></span></NavLink></li>
                        <li><NavLink onClick={()=> setMenu(prev => !prev)} to={'/asarlar'}>Asarlar <span className='span'></span></NavLink></li>
                        <li><NavLink onClick={()=> setMenu(prev => !prev)} to={'/presentatsiyalar'}>Presentatsiyalar <span className='span'></span></NavLink></li>
                        <li><NavLink onClick={()=> setMenu(prev => !prev)} to={'/admin'}>Admin <span className='span'></span></NavLink></li>
                        {/* </Fade> */}

                    </ul>
                </div> : ''
            }
        </Responsive>
    );
}

export default NavbarResponsive;


const Responsive = styled.div`
    transform: scale(0);

    @media screen and (max-width:768px) {
        width: 100%;
        height: 10vh;
        background-color: #2D1436;
        position: fixed;
        transform: scale(1);
        color:white;
        padding:15px 20px;
        justify-content: space-between;
        align-items: center;
        display: flex;
        top: 0;
        z-index: 2;
        .Modal {
            width: 100%;
            height: 100vh;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction:column;
            background-color: black;
            color: white;
            top: 0;
            left:0;
            z-index:3;
            a{
                color: white;
                font-size: 30px;
            }
            #close{
                position: absolute;
                top: 10%;
                right:10%;
            }
        }
        svg{
            cursor: pointer;
        }
        .inputSearch{
        span{
            position: relative;
                input{
                    padding: 10px 20px;
                    border-radius: 20px;
                    outline: none;
                    background-color: #42204E;
                    border: none;
                    color: white;
                }
                svg{
                    position: absolute;
                    right: 5%;
                    top: 20%;
                    cursor: pointer;
                    color: white;
                }
            }
    }
    }
`


