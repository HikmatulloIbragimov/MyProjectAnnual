import { React, useEffect, useState } from 'react';
import {  Table } from 'antd';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from '../../../Components/firebase/firebase';




const App = (params) => {
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
    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "presentatsiya", id));
            setData(data.filter((item) => item.id !== id));
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };
    const img = {
        width: '50px',
        height: '50px',
        objectFit: 'cover',
        borderRadius: '10px'
    }
    const color = {
        backgroundColor: '#FFF7FB',
        color: 'red',
        borderRadius: '5px',
        width: '100px',
        border: '1px solid red',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '5px',
        gap: '5px',
        cursor: 'pointer'
    }
    const columns = [
        {
            title: 'Presentatsiya',
            dataIndex: 'presentatsiya',
            key: 'presentatsiya',
            render: (item) => <div>
                <h4>{item.uid}</h4>
            </div>,
        },
        {
            title: 'Delete',
            // dataIndex: 'rasm',
            // key: 'rasm',
            align: 'center',
            render: (item) => <div>
                <div onClick={() => handleDelete(item.id)} style={color}>Delete</div>
            </div >
        }
    ];
    return (
        <Table columns={columns} dataSource={data} />
    )
};
export default App;