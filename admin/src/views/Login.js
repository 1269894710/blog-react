import React, {useState} from 'react';
import axios from 'axios'
import dataPath from '../config/api'
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../access/style/view.css'

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)

  const onFinish = values => {
    console.log('Received values of form: ', values)
    axios({
      method: 'post',
      url: 'http://127.0.0.1:7001/admin/checkLogin',
      params: values
    }).then((res) => {
      console.log(res)
    })
  };
  return (
    <div className="login-content">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h1>用户登录</h1>
        <Form.Item
          name="userName"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
