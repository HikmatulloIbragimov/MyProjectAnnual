import React from 'react';
import styled from 'styled-components';
import { useEffect , useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Components/firebase/firebase';
import Loader from '../../Components/Loader/loader';
const Presentatsiyalar = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let list = []
            const querySnapshot = await getDocs(collection(db, "presentatsiya"));
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
    console.log(data);
    return (
        <Presentation>
            {
                data.length ? 
                data.map((item)=> <div>
                    <iframe key={item.id} src={item.presentatsiya} width={'300px'} height={"300px"} frameborder="0"></iframe>
                </div>) : <Loader/>
            }
        </Presentation>
    );
}

export default Presentatsiyalar;
const Presentation = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #230E2B;
`