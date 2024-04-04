import React from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';
import { Fade } from "react-awesome-reveal";
import Image from '../../Components/Images/logo.png'
import Navbar from '../../Components/Navbar/navbar';
import NavbarResponsive from '../../Components/Navbar/navbarResponsive';
const Main = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Muqimiy' , 'Buyuk alloma' , 'Shoir'],
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 900,
            loop: true,
        });

    }, []);
    return (
        <Page>
                <div className='left'>
                    <Fade delay={1e3} cascade>
                        <h1>Kim desun</h1>
                        <h2 className='h1'><span ref={el}></span></h2>
                    </Fade>
                </div>
                <div className='right'>
                    <Fade delay={1e3} cascade><img className='image' src={Image} alt="" /></Fade>
                </div>
        </Page>
    );
}

export default Main;


const Page = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #230E2B;
    .left{
        width: 50%;
        .h1{
            width: 55%;
        }
    }
    .right{
        width: 40%;
        .image{
            animation:4s infinite 1s alternate animate;
            @keyframes animate {
                0%{
                    transform: translateY(20px);
                }
                100%{
                    transform: translateY(-20px);
                }
            }
        }
    }
    .h1{
        color: #F16206;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 90vh;
        flex-direction: column;
        .right{
            width: 80%;
            margin: auto;
            img{
                width: 90%;
            }
        }
        .left{
            width: 90%;
            margin: auto;
            h1{
                font-size: 20px;
            }
            .h1{
                width: 95%;
            }
            
        }
    }

`
