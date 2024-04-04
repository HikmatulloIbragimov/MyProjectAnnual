import { React, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../../Pages/Login/login';
import Main from '../../Pages/Main/main';
import SignUp from '../../Pages/SignUP/signUp'
import { AuthContext } from '../Context/AuthContext';
import Haqida from '../../Pages/Haqida/haqida';
import Rasm from '../../Pages/Rasm/rasm';
import Maqola from '../../Pages/Maqola/maqola';
import Asarlar from '../../Pages/Asarlar/asarlar';
import Presentatsiyalar from '../../Pages/Presentatsiyalar/presentatsiyalar';
import Videoroliklar from '../../Pages/Videoroliklar/videoroliklar';
import Admin from '../../Pages/Admin/Admin';
// import AsarlarForId from '../../Pages/Asarlar/Components/asarlarForId';
import RasmAdmin from '../../Pages/Admin/Pages/Rasm/rasm';
import AsarlarAdmin from '../../Pages/Admin/Pages/Asarlar/asarlar';
import PresentatsiyalarAdmin from '../../Pages/Admin/Pages/Presentatsiyalar/presentation';
import VideoroliklarAdmin from '../../Pages/Admin/Pages/Videoroliklar/videroliklar';
import Layout from '../../Pages/Admin/Layout';
const Router = () => {

    // const currentUser = false
    const { currentUser } = useContext(AuthContext)
    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/login" />
    }

    // console.log(currentUser);
    return (
        <div>
            <Routes>
                <Route path='/'>
                    <Route index element={<RequireAuth><Main /></RequireAuth>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<requireAuth><SignUp /></requireAuth>} />
                    <Route path='/haqida' element={<requireAuth><Haqida /></requireAuth>} />
                    <Route path='/rasm' element={<requireAuth><Rasm /></requireAuth>} />
                    <Route path='/maqola' element={<requireAuth><Maqola /></requireAuth>} />
                    <Route path='/asarlar' element={<requireAuth><Asarlar /></requireAuth>} />
                    <Route path='/presentatsiyalar' element={<requireAuth><Presentatsiyalar /></requireAuth>} />

                </Route>
                <Route path='admin'>
                    <Route index element={<requireAuth><Admin /></requireAuth>} />

                    {/* <Route index element={<requireAuth><Layout /></requireAuth>} />
                    <Route path='rasmAdmin' element={<requireAuth><RasmAdmin /></requireAuth>} />
                    <Route path='presentatsiyalarAdmin' element={<requireAuth><PresentatsiyalarAdmin /></requireAuth>} />
                    <Route path='videoroliklarAdmin' element={<requireAuth><VideoroliklarAdmin /></requireAuth>} /> */}
                </Route>


            </Routes>
        </div>
    );
}

export default Router;
