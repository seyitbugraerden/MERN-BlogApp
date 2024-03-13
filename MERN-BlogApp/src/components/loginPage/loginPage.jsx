import { Button, Form, Input, message } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function LoginRegister() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [savedUsers, setSavedUsers] = useState([]);
  axios
    .get("http://localhost:5000/api/user")
    .then((res) => setSavedUsers(res.data));

  useEffect(() => {
    const matchedElement = () => {
      savedUsers.filter((item) => {
        if (item.username === user.username) {
          if (item.password === user.password) {
            message.success("Giriş Başarılı");
            localStorage.setItem("user", JSON.stringify(user));
          } else {
            message.error("Şifreniz hatalı");
          }
        } else {
          message.error("Kullanıcı Adı Hatalı");
        }
      });
    };
    matchedElement();
  }, [user]);

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
        onFinish={(values) => {
          setUser({
            username: values.username,
            password: values.password,
          });
          localStorage.setItem("user", JSON.stringify(user));
        }}
        onFinishFailed={() => {
          message.error("Eksik Veri Girdiniz");
        }}
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
            <Link to="/register" style={{ fontWeight: "bold" }}>
              ÜYE OL
            </Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginRegister;
