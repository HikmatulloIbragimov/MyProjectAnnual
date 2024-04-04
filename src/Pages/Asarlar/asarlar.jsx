import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Components/firebase/firebase';
import { useEffect } from 'react';
import Loader from '../../Components/Loader/loader';
// import Navbar from '../../Components/Navbar/navbar';
// import NavbarRespnosive from '../../Components/Navbar/navbarResponsive';
const Asarlar = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let list = []
            const querySnapshot = await getDocs(collection(db, "asarlar"));
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

    const getAsar = (id) => {
        navigate('asarlar')
    }
    return (
        <AsarlaR>
            <div className="asarHaqida">
                <h2>Asarlar</h2>
                <p>Asarlar - Sahifamizdan o'zbek va jahon adabiyotining
                    eng sara namunalari o'rin olgan bo'lib, ular sizni
                    tafakkurning cheksiz osmonida parvoz qilmoqqa
                    chorlaydi.
                </p>
            </div>
            <div className="content">
                <div onClick={() => getAsar()} className="rightBar">
                    <div className="bar">
                        <h2>O‘lgin deding — Yerga ko‘mding...</h2>
                        <p>O‘lgin deding — Yerga ko‘mding — Ildiz bo‘ldim.
                            Ko‘kka otding — yo‘q bo‘l deding — Yulduz bo‘ldim.
                            Tilim kesding — dilim aytdi — Rost kalima...
                            Qiyin bo‘ldi senga sho‘rlik Dushmanim-a!
                        </p>
                    </div>
                    {
                        data.length ? data.map((item) => <div key={item.id} className="bar">
                            <h2>{item.name}</h2>
                            <p>{item.text}</p>
                        </div>) : <Loader />
                    }
                </div>
            </div>
        </AsarlaR>
    );
}

export default Asarlar;
const AsarlaR = styled.div`
   width: 100%;
    height: 100vh;
    display: flex;
    color: white;
    background-color: #230E2B;
    flex-direction:column ;
    /* .page2{
        
    } */
    .asarHaqida{
        width:100%;
        /* margin:8% auto 2% auto; */
        padding: 5% 5%;
    }
    .content{
        width: 100%;
        display: flex;
        justify-content: center;
        /* .leftBar{
            width: 25%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
        } */
        .rightBar{
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap:30px;
            padding: 0 5%;
            .bar{
                width: 100%;
                border: 1px solid white;
                border-radius: 25px;
                padding: 10px;
                cursor: pointer;
            }
        }
    }          
`