import React, { useEffect, useState } from "react";
import PersonelCard from "../../personelCard/personelCard";
import Banner from "../banner/banner";
import { Col, Input, Row, Form, Button, message } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

function AdminBlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/blog/${id}`
        );
        setBlog(response.data);
        form.setFieldsValue(response.data); // Initialize form with fetched data
      } catch (error) {
        console.error("Error fetching blog details:", error);
        message.error("Failed to fetch blog details.");
      }
    };

    fetchData();
  }, [form, id]);

  const handleFormSubmit = async (values) => {
    try {
      await axios.put(`http://localhost:5000/api/blog/${id}`, values);
      message.success("Blog updated successfully.");
      setTimeout(() => {
        window.location.href = "/admin/blog";
      }, 500);
    } catch (error) {
      console.error("Error updating blog:", error);
      message.error("Failed to update blog.");
    }
  };

  const deleteBlog = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/blog/${id}`);
      message.success("Silme İşlemi Başarılı");
      setTimeout(() => {
        window.location.href = "/admin/blog";
      }, 500);
    } catch (error) {
      console.log("Error");
    }
  };
  return (
    <div className="container">
      <Row>
        <Col xs={24} md={7}>
          <PersonelCard />
        </Col>
        <Col span={1}></Col>
        <Col xs={24} md={16}>
          <Banner />
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            autoComplete="off"
            onFinish={handleFormSubmit}
          >
            <Form.Item
              label="Blog Başlığı"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Lütfen geçerli bir blog başlığı giriniz.",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Blog Yazısı"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Lütfen geçerli bir blog yazısı giriniz.",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <div
                style={{ display: "flex", justifyContent: "start", gap: "5px" }}
              >
                <Button type="primary" htmlType="submit">
                  Kaydet
                </Button>
                <Button
                  style={{ background: "red", color: "white" }}
                  onClick={deleteBlog}
                >
                  Sil
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default AdminBlogDetail;
