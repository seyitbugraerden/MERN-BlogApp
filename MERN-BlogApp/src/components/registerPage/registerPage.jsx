import React from "react";
import { Button, DatePicker, Form, Input, Upload } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
function calculateAge(birthday) {
  const ageDifferenceMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifferenceMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function RegisterPage() {
  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/api/user", {
        ...values,
        socialLinks: { facebook: "123.com" },
      });
      console.log("Response:", response.data);
      console.log("OK");
    } catch (error) {
      console.error("Error:", error);
    }
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
          label="Ad ve Soyad"
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
          name="birthday"
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
              required: false,
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

        <Form.Item
          wrapperCol={{ offset: 0, span: 24 }}
          style={{ textAlign: "center" }}
        >
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Üye ol
          </Button>
          Hesabın var mı?{" "}
          <span stlye={{ fontWeight: "bold" }}>
            <Link to="/">Giriş Yap</Link>{" "}
          </span>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegisterPage;
