// import React, { useState } from 'react';
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, Button, theme } from 'antd';
// import { Link, Outlet, useNavigate } from 'react-router-dom';
// const { Header, Sider, Content } = Layout;
// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   const navigate = useNavigate('')
//   return (
//     // <Layout style={{position:'fixed', top:'20%' , zIndex:'2' , backgroundColor:'black'}}>
//     //   <Sider trigger={null} collapsible collapsed={collapsed}>
//     //     <div className="demo-logo-vertical" />
//     //     <Menu
//     //       theme="dark"
//     //       mode="inline"
//     //       defaultSelectedKeys={['1']}
//     //       onClick={({key})=> navigate(key) }
//     //       items={[
//     //         {
//     //           key: 'rasmAdmin',
//     //           icon: <UserOutlined />,
//     //           label: 'Rasm',
//     //         },
//     //         {
//     //           key:<Link to={'2'}/> ,
//     //           icon: <VideoCameraOutlined />,
//     //           label: 'nav 2',
//     //         },
//     //         {
//     //           key: '3',
//     //           icon: <UploadOutlined />,
//     //           label: 'nav 3',
//     //         },
//     //       ]}
//     //     />
//     //   </Sider>
//     //   <Layout>
//     //     <Header
//     //       style={{
//     //         padding: 0,
//     //         background: colorBgContainer,
//     //       }}
//     //     >
//     //       <Button
//     //         type="text"
//     //         icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//     //         onClick={() => setCollapsed(!collapsed)}
//     //         style={{
//     //           fontSize: '16px',
//     //           width: 64,
//     //           height: 64,
//     //         }}
//     //       />
//     //     </Header>
//     //     <Content
//     //       style={{
//     //         width:'100%',
//     //         height:'100vh',
//     //         margin: '24px 16px',
//     //         padding: 24,
//     //         minHeight: 280,
//     //         background: colorBgContainer,
//     //         borderRadius: borderRadiusLG,
//     //       }}
//     //     >
//     //       <h1>Outlet</h1>
//     //       <Outlet/>
//     //     </Content>
//     //   </Layout>
//     // </Layout>
//     <Layout style={{ position: 'fixed', top: '20%', zIndex: '2', backgroundColor: 'black' }}>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="demo-logo-vertical text-center text-white"  >
//           <h2>Logo</h2>
//         </div>
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           onClick={({ key }) => navigate(key)}
//           items={[
//             {
//               key: 'rasmAdmin',
//               icon: <UserOutlined />,
//               label: 'Rasm',
//             },
//             {
//               key: '/lavozim',
//               icon: <VideoCameraOutlined />,
//               label: 'Lavozim',
//             },
//             {
//               key: '/daraja',
//               icon: <UploadOutlined />,
//               label: 'Daraja',
//             },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: '16px',
//               width: 64,
//               height: 64,
//             }}
//           />
//         </Header>
//         <Content
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//             overflowY: 'auto',
//           }}
//         >
//           <Outlet />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };
// export default App;