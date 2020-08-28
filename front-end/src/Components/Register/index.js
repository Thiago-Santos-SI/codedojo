import React, { useState } from 'react';

import 'antd/dist/antd.css';
import './index.css';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import api from "../../services/api";

const Register = () => {
    const [username, setUsername] = useState([])
    const [email, setEmail] = useState([])
    const [password, sePassword] = useState([])


    const handleRegisterUser = async e => {
        e.preventDefault();

    }


    return (
        <Form onFinish={handleRegisterUser}
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input
                    value={}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Nome de usuário" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="e-mail"
                    placeholder="E-mail"
                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Senha"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Register
