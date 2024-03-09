import { Button, Form, Input } from "antd";
import React from "react";

function loginRegister() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="loginArea">
      <h2 style={{ fontSize: "16px" }}>Giriş Yap</h2>
      <p style={{ fontSize: "14px" }}>Lütfen devam etmek için giriş yapın.</p>
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
          label="Şifre"
          name="password"
          rules={[
            { required: true, message: "Lütfen geçerli bir şifre giriniz." },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <br />
        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Giriş Yap
          </Button>
          <p
            style={{
              textAlign: "center ",
              marginTop: "10px",
              fontSize: "10px",
            }}
          >
            Hesabın yok mu?{" "}
            <span stlye={{ fontWeight: "bold" }}>
              <a>ÜYE OL</a>{" "}
            </span>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
}

export default loginRegister;
