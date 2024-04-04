import { React, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Admin from '../../Pages/Admin/Admin';
import RasmAdmin from '../../Pages/Admin/Pages/Rasm/rasm';
import AsarlarAdmin from '../../Pages/Admin/Pages/Asarlar/asarlar';
import PresentatsiyalarAdmin from '../../Pages/Admin/Pages/Presentatsiyalar/presentation';
import VideoroliklarAdmin from '../../Pages/Admin/Pages/Videoroliklar/videroliklar';
import Layout from '../../Pages/Admin/Layout';
// const router = createBrowserRouter([
//     {
//     path:'/',
//     children: [
//       { index: true, element: <Admin />}, 
//       { path:'admin', element: <Layout />},
//       { path:'rasmAdmin', element: <RasmAdmin />},
//   ],
//    },
  
//   ]);
const Router = () => {

    const { currentUser } = useContext(AuthContext)
    const RequireAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/login" />
    }

    // console.log(currentUser);
    return (
        <div>

            {/* <Routes>
            <Route path='/admin'>
                    <Route index element={<requireAuth><Layout /></requireAuth>} />
                    <Route path='asarlarAdmin' element={<requireAuth><AsarlarAdmin /></requireAuth>} />
                    <Route path='rasmAdmin' element={<requireAuth><RasmAdmin /></requireAuth>} />
                    <Route path='presentatsiyalarAdmin' element={<requireAuth><PresentatsiyalarAdmin /></requireAuth>} />
                    <Route path='videoroliklarAdmin' element={<requireAuth><VideoroliklarAdmin /></requireAuth>} />
                </Route>
            </Routes> */}

        </div>
    );
}

export default Router;
