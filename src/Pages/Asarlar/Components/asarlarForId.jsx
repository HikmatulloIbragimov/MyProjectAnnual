import React from 'react';
import styled from 'styled-components';

const AsarlarForId = () => {
    return (
        <AsarlaRForIdBar>
            <h1>HEllo</h1>
        </AsarlaRForIdBar>
    );
}

export default AsarlarForId;
const AsarlaRForIdBar = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    color: white;
    background-color: #230E2B;
    justify-content: center;
    align-items: center;
    flex-direction:column ;
    .asarHaqida{
        width:90%;
        margin:8% auto 2% auto;
    }      
`