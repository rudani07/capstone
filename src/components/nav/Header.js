import React, { useState } from "react";
import {
  LoginOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Item from "antd/es/list/Item";
import { useDispatch } from "react-redux";
import { firebase } from "firebase/app";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase";
const { SubMenu } = Menu;

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = async () => {
    try {
      await auth.signOut(auth);
      dispatch({
        type: "LOGOUT",
        payload: null,
      });
      history.push("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    setCurrent(e.key);
  };
  const items = [
    {
      label: <Link to="/"> Home Page </Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/register"> Register </Link>,
      key: "register",
      icon: <UserAddOutlined />,
      className: "float-right",
    },
    {
      label: <Link to="/login"> Login Page </Link>,
      key: "login",
      icon: <UserOutlined />,
      className: "float-right",
    },
    {
      label: "Logout",
      key: "logout",
      icon: <UserOutlined />,
      className: "float-right",
      onClick: logout,
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
