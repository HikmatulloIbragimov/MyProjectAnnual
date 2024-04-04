import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Components/firebase/firebase';
import { Image } from 'antd';
import Loader from '../../Components/Loader/loader';
const Rasm = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let list = []
            const querySnapshot = await getDocs(collection(db, "rasm"));
            try {

                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() })
                });
                setData(list)
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])


    return (
        <ImageBar>
            {
                data.length ? data.map((item) => <div>
                    <Image className='name' key={item.id} src={item.rasm} alt="" />
                </div>
    )
                    : <Loader />
            }
        </ImageBar >
    );
}

export default Rasm;
const ImageBar = styled.div`
   width: 100%;
   height: 100vh;
    display: flex;
    padding-top: 10%;
    color: white;
    justify-content: center;
    align-items: center;
    background-color: #230E2B;
    flex-wrap: wrap;

    .name{
        width: 350px;
        height: 350px;
        object-fit: contain;
        
    }
    @media screen and (max-width:768px){
        height: auto;
        padding-top: 200px;
        flex-direction: column;
        gap: 20px;
        .name{
            width: 250px;
            height: auto;
        }
    }
`