import { async } from '@firebase/util';
import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from '../../Components/firebase/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { Button, Drawer } from 'antd';
import TableRasm from '../Admin/Components/tableRasm'
import TableAsar from '../Admin/Components/tableAsar'
import TablePresentation from '../Admin/Components/tablePresentation'
const Admin = () => {
    const [data, setData] = useState({})
    const [data2, setData2] = useState({})
    const [asar, setAsar] = useState({})
    const [asarFile, setAsarFile] = useState('')
    const [PresentFile, setPresentFile] = useState('')
    const [files, setFiles] = useState('')
    const [file, setFile] = useState('')
    const [perc, setPerc] = useState(null)
    const [perc2, setPerc2] = useState(null)
    const [perc3, setPerc3] = useState(null)

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const showDrawer2 = () => {
        setOpen2(true);
    };
    const onClose2 = () => {
        setOpen2(false);
    };
    const showDrawer3 = () => {
        setOpen3(true);
    };
    const onClose3 = () => {
        setOpen3(false);
    };

    const handleInp = (e) => {
        const id = e.target.id
        const value = e.target.value


        setAsarFile({ ...asarFile, [id]: value })
    }




    useEffect(() => {
        const uploadFiles = () => {
            const name = new Date().getTime() + files.name
            const storageRef = ref(storage, files.name);
            const uploadTask = uploadBytesResumable(storageRef, files);


            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setPerc(progress)
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData((prev) => ({ ...prev, rasm: downloadURL }))
                    });
                }
            );
        }
        files && uploadFiles()
        const uploadFiles2 = () => {
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);


            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setPerc2(progress)
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData2((prev) => ({ ...prev, presentatsiya: downloadURL }))
                    });
                }
            );
        }
        file && uploadFiles2()
        const uploadAsar = () => {
            const name = new Date().getTime() + asarFile.name
            const storageRef = ref(storage, asarFile.name);
            const uploadTask = uploadBytesResumable(storageRef, asarFile);


            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setPerc3(progress)
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setAsarFile((prev) => ({ ...prev, asarlar: downloadURL }))
                    });
                }
            );
        }
        asarFile && uploadAsar()
    }, [files, file, asarFile]);

    const handleAdd = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, "rasm"), {
                ...data,
                timeStump: serverTimestamp()
            });
            setOpen2(prev => !prev)
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }
    const handleAdd2 = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, "presentatsiya"), {
                ...data2,
                timeStump: serverTimestamp()
            });
        } catch (err) {
            console.log(err);
        }
    }
    const handleAddAsar = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, "asarlar"), {
                ...asarFile,
                timeStump: serverTimestamp()
            });
        } catch (err) {
            console.log(err);
        }
    }
    const navigate = useNavigate()
    const Click = () => {
        localStorage.clear('user')
        navigate('/login')
    }

    return (
        // <AdminPage>
        //     <Layout/>
        // </AdminPage>
        <AdminPage>
            <button onClick={Click}>Exit</button>
            <div className="asarlar">
                <h2>Asarlar</h2>
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
                <TableAsar />
                <Drawer className='drawer' title="Asarlar" onClose={onClose} open={open}>
                    <Send>
                        <form onSubmit={handleAddAsar}>
                            <input id={'name'} onChange={handleInp} type="text" placeholder='Name' />
                            <input id={'text'} onChange={handleInp} type="text" placeholder='Text' />
                            <button disabled={perc3 !== null && perc3 < 100} type='submit' className='btn3'>Submit</button>
                        </form>
                    </Send>
                </Drawer>

            </div>
            <div className="rasmlar">
                <h2>Rasmlar</h2>
                <Button type="primary" onClick={showDrawer2}>
                    Open
                </Button>
                <TableRasm />
                <Drawer className='drawer' title="Rasmlar" onClose={onClose2} open={open2}>
                    <Send2>
                        <form onSubmit={handleAdd}>
                            <label htmlFor='file'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                                </svg>
                            </label>
                            <input
                                type="file"
                                id='file'
                                onChange={(e) => setFiles(e.target.files[0])}
                                style={{ display: 'none' }}
                            />
                            <button disabled={perc !== null && perc < 100} type='submit' className='btn'>Submit</button>
                        </form>
                    </Send2>
                </Drawer>
            </div>
            <div className="presentatsiyalar">
                <h2>presentatsiyalar</h2>
                <Button type="primary" onClick={showDrawer3}>
                    Open
                </Button>
                <TablePresentation />
                <Drawer
                    className='drawer'
                    title="presentatsiyalar"
                    onClose={onClose3}
                    open={open3}
                >
                    <Send3>
                        <form className='form' onSubmit={handleAdd2}>
                            <label htmlFor='file2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                                </svg>
                            </label>
                            <input
                                type="file"
                                id='file2'
                                onChange={(e) => setFile(e.target.files[0])}
                                style={{ display: 'none' }}
                            />
                            <button disabled={perc2 !== null && perc2 < 100} type='submit' className='btn2'>Submit</button>
                        </form>
                    </Send3>
                </Drawer>

            </div>
        </AdminPage>
    );
}

export default Admin;



const AdminPage = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 2;
    color: white ;
    top: 0;
    gap: 60px;
    background-color: #230E2B;
    .asarlar{
        width: 100%;
    }
    .rasmlar{
        width: 100%;
    }
    .presentatsiyalar{
        width: 100%;
    }
`
export const Send = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        gap: 30px;
        input{
            padding: 10px 20px;
            border-radius: 10px;

        }
        .btn3{
            padding: 10px 15px;
            border-radius: 15px;
            cursor: pointer;
            &:disabled{
                background-color: #595959;
                color: white;
            }
        }
    }
`
export const Send2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        gap: 30px;
        input{
            padding: 10px 20px;
            border-radius: 10px;

        }
        .btn{
            padding: 10px 15px;
            border-radius: 15px;
            cursor: pointer;
            &:disabled{
                background-color: #595959;
                color: white;
            }
        }
        svg{
            cursor: pointer;
            margin-top:30px;
        }
    }
`
export const Send3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        gap: 30px;
        .btn2{
            padding: 10px 15px;
            border-radius: 15px;
            cursor: pointer;
            &:disabled{
                background-color: #595959;
                color: white;
            }
        }
        svg{
            cursor: pointer;
            margin-top:30px;
        }
    }
`