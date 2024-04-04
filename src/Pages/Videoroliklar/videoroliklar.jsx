import React from 'react';
import styled from 'styled-components';
const Videoroliklar = () => {
    return (
        <Videos>
            <video width="750" height="500" controls >
                <source src="https://youtu.be/D9W7AFeJ3kk?si=riwVbOAZiiIsuFzv" type="video/mp4" />
            </video>
        </Videos>
    );
}

export default Videoroliklar;

const Videos = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #230E2B;
    @media screen and (max-width:768px){
        /* height: 100vh; */
        /* width: 300px; */

        video{
            /* z-index:6; */
            width: 300px;
        }
    }
`