import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { Fade } from "react-awesome-reveal";

const Navbar = () => {


    return (
        <div>
            <NavBar>
                <div>
                    <Fade delay={1e1} cascade><NavLink to={'/'}><h2 className='h2'>Muqimiy</h2></NavLink></Fade>
                </div>
                <ul>
                    <Fade delay={1e1} cascade damping={1e-1}>
                        <li><NavLink to={'/haqida'}>Haqida <span className='span'></span></NavLink></li>
                        <li><NavLink to={'/rasm'}>Rasm <span className='span'></span></NavLink></li>
                        <li><NavLink to={'/asarlar'}>Asarlar <span className='span'></span></NavLink></li>
                        <li><NavLink to={'/presentatsiyalar'}>Presentatsiyalar <span className='span'></span></NavLink></li>
                        {/* <li><NavLink to={'/admin'}>Admin <span className='span'></span></NavLink></li> */}
                    </Fade>

                </ul>
                <div className='inputSearch'>
                    <Fade cascade delay={1e1}>
                        <span>
                            <input type="text" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#925FA4" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </span>
                    </Fade>
                </div>
            </NavBar >
        </div>
    );
}

export default Navbar;


const NavBar = styled.div`
    width: 100%;
    height:13vh;
    position: fixed;
    top:0;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #2D1436;
    padding: 10px 20px;
    color: white;
    .h2{
            color: white;
        }
    h2{
        cursor: pointer;
    }
    ul{
        display: flex;
        gap: 50px;
        li{
            font-size: 18px;
            position: relative;
            a{
            color: white;
            span{
                        left: 0;
                        top: 60px;
                        background: linear-gradient(90deg, #EE0979 0%, #FF6A00 100%);
                        width: 100%;
                        height: 5px;
                        transform: scaleX(0);
                        transition: transform .3s;
                        transition-delay:.2s;
                        position: absolute;
                        display: block;
                        transform-origin:left;
                    }
            }
                }
       
    }
    .inputSearch{
        span{
            position: relative;
                input{
                    padding: 10px 40px;
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
    .active{
        color: #FE6703;
        transition: .2s;
        .h2{
            color: white;
        }
        .span{
            transform: scaleX(1);
            transform-origin: left; 
        }
    }
    @media screen and (max-width:768px) {
        display: none;
    }
    
`