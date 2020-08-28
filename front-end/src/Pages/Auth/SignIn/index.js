import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import AuthActions from '../../../store/ducks/auth'

import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class SignIn extends Component {
    static propTypes = {
        signInRequest: PropTypes.func.isRequired
    }

    state = {
        email: '',
        password: ''
    };

    handleSubmit = e => {

        const {email, password} = this.state
        const {signInRequest} = this.props

        signInRequest(email, password)
    }

    render() {
        const { email, password } = this.state

        return (
            <Form onFinish={this.handleSubmit}
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
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Nome de usuário"
                        type="email"
                        value={email}
                        onChange={e => this.setState({email: e.target.value })}
                    />
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
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        value={password}
                        onChange={e => this.setState({password: e.target.value })}
                        type="password"
                        placeholder="Senha"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="submit" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>

        );
}
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(AuthActions, dispatch)



export default connect(null, mapDispatchToProps)(SignIn)
