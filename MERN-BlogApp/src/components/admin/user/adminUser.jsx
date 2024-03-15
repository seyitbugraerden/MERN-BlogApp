import React, { useEffect } from "react";
import { Button, DatePicker, Form, Input } from "antd";
import axios from "axios";

function AdminUser() {
  const userId = JSON.parse(localStorage.getItem("user"));
  const [form] = Form.useForm();
  const validateDOB = (_, value) => {
    const dob = new Date(value);
    const age = calculateAge(dob);
    if (age >= 18) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("18 yaşından küçükler kayıt olamaz."));
  };
  useEffect(async () => {
    const response = await axios.get(
      `http://localhost:5000/api/user/${userId}`
    );
    form.setFieldsValue({
      fullname: response.data.fullname,
      username: response.data.username,
      password: response.data.password,
      aboutme: response.data.aboutme,
    });
  }, []);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={(values) => {
        console.log(values);
      }}
      onFinishFailed={() => {
        console.log("Error");
      }}
      form={form}
      autoComplete="off"
    >
      <Form.Item
        label="Ad - Soyad"
        name="fullname"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Kullanıcı Adı"
        name="username"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Şifre"
        name="password"
        rules={[
          {
            required: true,
            message: "Lütfen geçerli bir şifre giriniz.",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Hakkımda"
        name="aboutme"
        rules={[
          {
            required: true,
            message: "Lütfen geçerli bir hakkımda yazısı yazınız.",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AdminUser;
