import { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import sider from '/Sider.png';
import logo from '/Logo.png';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
  LogoutOutlined,
  BellOutlined,
  ProfileOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  MailOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, Layout, Menu, theme, Avatar ,Drawer } from 'antd';
import FilterUI from '../../Components/Team/Filter';
import './DashboardLayout.css'
import DashboardPage from '../Pages/DashboardPage';
import Complaint from '../Pages/Complaint/Complaint';
import SurveyMainPage from '../Pages/SurveyManagement/SurveyMainPage';
import SurveyAdd from '../Pages/SurveyManagement/SurveyAdd';
import SurveyResponse from '../Pages/SurveyManagement/SurveyResponse/SurveyResponse';
import SurveyIndividual from '../Pages/SurveyManagement/SurveyResponse/SurveyIndividual';
import UserTable from '../Pages/UserManagement/UserTable';
import TeamData from '../Pages/TeamManagement/TeamData';
import TeamTable from '../Pages/TeamManagement/TeamTable';
import DeleteUser from '../Pages/UserManagement/DeleteUser';
import EditUser from '../Pages/UserManagement/EditUser';

const { Header, Sider, Content } = Layout;

function MainDashboardLayout() {
   const [collapsed, setCollapsed] = useState(false);
   const [drawerVisible , setDrawerVisible] = useState(false);
   


  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible)
  }
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const profileMenu = (
    <Menu
      items={[
        { key: '1', icon: <ProfileOutlined />, label: 'Profile' },
        { key: '2', icon: <SettingOutlined />, label: 'Settings' },
        { key: '3', icon: <LogoutOutlined />, label: 'Logout' },
      ]}
    />
  );

  return (
    <Router>
      <Layout className="h-screen">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ backgroundColor: '#008444', overflow:'hidden' }}
          className="sider"
        >
          <div className="flex justify-center items-center py-4 mt-3">
            <img className="bg-white rounded-full h-10 w-10" src={logo} alt="Logo" />
            {!collapsed && (
              <h3 className="text-white font-bold text-center text-lg ml-2">Pakistan Cable</h3>
            )}
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ backgroundColor: '#008444' }}
            className="menu"
          >
            <Menu.Item key="1" icon={<DashboardOutlined />} className="menu-item">
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.SubMenu
              key="sub1"
              className='!text-white'
              title={
                <span className="menu-item">
                  <UserOutlined /> {!collapsed && 'Products'}
                </span>
              }
            >
              <Menu.Item key="1-1" className="menu-item">
                <Link to="/add-product">Add Product</Link>
              </Menu.Item>
              <Menu.Item key="1-2" className="menu-item">
                <Link to="/view-products">View Products</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="sub2"
              title={
                <span className="menu-item">
                  <VideoCameraOutlined /> {!collapsed && 'Orders'}
                </span>
              }
            >
              <Menu.Item key="2-1" className="menu-item">
                <Link to="/new-orders">New Orders</Link>
              </Menu.Item>
              <Menu.Item key="2-2" className="menu-item">
                <Link to="/order-history">Order History</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="3" icon={<ShoppingCartOutlined />} className="menu-item">
              <Link to="/complaint">Complaint</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ShoppingCartOutlined />} className="menu-item">
              <Link to="/survey-management">Surveys</Link>
            </Menu.Item>
            <Menu.SubMenu
              key="sub3"
              title={
                <span className="menu-item">
                  <UploadOutlined /> {!collapsed && 'Employees'}
                </span>
              }
            >
              <Menu.Item key="3-1" className="menu-item">
                <Link to="/user">User Management</Link>
              </Menu.Item>
              <Menu.Item key="3-2" className="menu-item">
                <Link to="/team-management">Team Management</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="4" icon={<SettingOutlined />} className="menu-item">
              <Link to="/settings">Settings</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<LogoutOutlined />} className="menu-item">
              Logout
            </Menu.Item>
          </Menu>
          <div className="mt-auto p-4">
            <img src={sider} alt="Sidebar Footer" className="w-full rounded" />
          </div>
        </Sider>

        <Drawer
        title = 'Pakistan Cable'
        placement = 'left'
        closable
        onClose = {toggleDrawer}
        visible = {drawerVisible}
        width = {250}
        bodyStyle = {{padding:0 , background : "#008444"}}
        >
          <div className="flex justify-center items-center py-4 mt-3">
            <img className="bg-white rounded-full h-10 w-10" src={logo} alt="Logo" />
            {!collapsed && (
              <h3 className="text-white font-bold text-center text-lg ml-2">Pakistan Cable</h3>
            )}
          </div>
<Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ backgroundColor: '#008444' }}
            className="menu"
          >
            <Menu.Item key="1" icon={<DashboardOutlined />} className="menu-item">
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.SubMenu
              key="sub1"
              className='!text-white'
              title={
                <span className="menu-item">
                  <UserOutlined /> {!collapsed && 'Products'}
                </span>
              }
            >
              <Menu.Item key="1-1" className="menu-item">
                <Link to="/add-product">Add Product</Link>
              </Menu.Item>
              <Menu.Item key="1-2" className="menu-item">
                <Link to="/view-products">View Products</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="sub2"
              title={
                <span className="menu-item">
                  <VideoCameraOutlined /> {!collapsed && 'Orders'}
                </span>
              }
            >
              <Menu.Item key="2-1" className="menu-item">
                <Link to="/new-orders">New Orders</Link>
              </Menu.Item>
              <Menu.Item key="2-2" className="menu-item">
                <Link to="/order-history">Order History</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="3" icon={<ShoppingCartOutlined />} className="menu-item">
              <Link to="/complaint">Complaint</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ShoppingCartOutlined />} className="menu-item">
              <Link to="/survey-management">Surveys</Link>
            </Menu.Item>
            <Menu.SubMenu
              key="sub3"
              title={
                <span className="menu-item">
                  <UploadOutlined /> {!collapsed && 'Employees'}
                </span>
              }
            >
              <Menu.Item key="3-1" className="menu-item">
                <Link to="/user">User Management</Link>
              </Menu.Item>
              <Menu.Item key="3-2" className="menu-item">
                <Link to="/team-management">Team Management</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="4" icon={<SettingOutlined />} className="menu-item">
              <Link to="/settings">Settings</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<LogoutOutlined />} className="menu-item">
              Logout
            </Menu.Item>
          </Menu>
        </Drawer>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className="flex justify-between items-center px-4">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={window.innerWidth < 768 ? toggleDrawer : toggleSidebar}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
              <div className="flex items-center gap-2">
                <div className='flex gap-4'>
                  <SearchOutlined className='!text-[18px]' />
                  <MailOutlined className='!text-[18px]' />
                  <BellOutlined className='!text-[18px]' />
                  <ShoppingCartOutlined className='!text-[22px] me-4' />
                </div>
                <Dropdown overlay={profileMenu} placement="bottomRight" arrow>
                  <Avatar
                    style={{ backgroundColor: '#008444', cursor: 'pointer' }}
                    icon={<UserOutlined />}
                  />
                </Dropdown>
                <div>
                  <span className="block text-md font-semibold leading-none">Admin</span>
                  <span className="block text-sm text-gray-500 leading-none">Jhon Deo</span>
                </div>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '10px 10px',
              padding: 15,
              minHeight: 310,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflowY: 'auto', // Enable scrolling for content
              height: 'calc(100vh - 64px)', // Fill the screen minus the header height
            }}
          >
            <div className="flex gap-2">
              {location.pathname === "/team-management" && collapsed && <FilterUI />}
              <div style={{ flex: 1 }}>
                <Routes>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/add-product" element={<h1>Add Product</h1>} />
                  <Route path="/view-products" element={<h1>View Products</h1>} />
                  <Route path="/new-orders" element={<h1>New Orders</h1>} />
                  <Route path="/order-history" element={<h1>Order History</h1>} />
                  <Route path="/complaint" element={<Complaint />} />
                  <Route path="/sales" element={<h1>Sales</h1>} />
                  <Route path="/survey-management" element={<SurveyMainPage />} />
                  <Route path="/add-survey" element={<SurveyAdd />} />
                  <Route path="/survey-management/response" element={<SurveyResponse />} />
                  <Route path="/survey-management/individual" element={<SurveyIndividual />} />
                  <Route path="/user" element={<UserTable />} />
                  <Route path="/team-management" element={<TeamData />} />
                  <Route path="/team-management/team" element={<TeamTable />} />
                  <Route path="/editUser/:id" element={<EditUser />} />
                  <Route path="/deleteUser" element={<DeleteUser />} />
                  <Route path="/settings" element={<h1>Settings</h1>} />
                </Routes>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default MainDashboardLayout;
