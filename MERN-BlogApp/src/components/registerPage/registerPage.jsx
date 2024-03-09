import React from "react";
import { Button, DatePicker, Form, Input, Upload } from "antd";
function calculateAge(birthday) {
  const ageDifferenceMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifferenceMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function RegisterPage() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateDOB = (_, value) => {
    const dob = new Date(value);
    const age = calculateAge(dob);
    if (age >= 18) {
      return Promise.resolve();
    }
    return Promise.reject(new Error("18 yaşından küçükler kayıt olamaz."));
  };

  return (
    <div className="loginArea">
      <h2 style={{ fontSize: "16px" }}>Üye Ol</h2>
      <p style={{ fontSize: "14px" }}>
        Lütfen devam etmek için üyelik oluşturun.
      </p>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Ad Soyad"
          name="fullname"
          rules={[
            {
              required: true,
              message: "Lütfen geçerli bir ad soyad giriniz.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Kullanıcı Adı"
          name="username"
          rules={[
            {
              required: true,
              message: "Lütfen geçerli bir kullanıcı adı giriniz.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="E-Posta"
          name="email"
          rules={[
            { required: true, message: "Lütfen geçerli bir E-Posta giriniz." },
            {
              type: "email",
              message: "Lütfen geçerli bir e-posta adresi giriniz.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Doğum Tarihi"
          name="dob"
          rules={[
            {
              required: true,
              message: "Lütfen geçerli bir doğum tarihi giriniz.",
            },
            { validator: validateDOB },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Şifre"
          name="password"
          rules={[
            { required: true, message: "Lütfen geçerli bir şifre giriniz." },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Şifre (Tekrar)"
          name="passwordCheck"
          rules={[{ required: true, message: "Lütfen Şifrenizi Doğrulayın." }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Avatar Image"
          name="image"
          rules={[
            {
              required: true,
              message: "Lütfen geçerli bir avatar image ekleyiniz.",
            },
          ]}
        >
          <Upload
            accept=".png,.jpeg,.jpg"
            name="avatar"
            listType="picture"
            maxCount={1}
          >
            <Button>+</Button>
          </Upload>
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

        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Üye ol
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterPage;
