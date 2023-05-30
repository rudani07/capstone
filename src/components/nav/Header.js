import React, { useState } from 'react';
import { LoginOutlined,HomeOutlined,PlusCircleOutlined,UserOutlined,UserAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const {SubMenu} = Menu;

const items = [
    {
      label: (<Link to='/'> Home Page </Link>),
      key: 'home',
      icon: <HomeOutlined />,
    },
    {
        label: ( <Link to='/login'> Login Page </Link>) ,
        key: 'login',
        icon: <UserOutlined />,
        className: 'float-right',
      },{
        label: ( <Link to='/register'> New User </Link> ) ,
        key: 'register',
        icon: <UserAddOutlined />,
        className: 'float-right',
      },
  ];

const Header = () => {
    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
      console.log(e.key);
      setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;

};

export default Header;