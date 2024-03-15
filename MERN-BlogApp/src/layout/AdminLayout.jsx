import React from "react";
import { Row, Col, Table, Button } from "antd";
import PersonelCard from "../components/personelCard/personelCard";
import Swiper from "../components/swiper/swiper";
import { useLocation } from "react-router-dom";
import AdminUser from "../components/admin/user/adminUser";
function AdminLayout() {
  const location = useLocation();
  const located = location.pathname;
  const dataSource = [
    {
      key: "user",
      user: "Kullanıcı",
      blog: "Açık",
    },
    {
      key: "blog",
      user: "Blog",
      blog: "Açık",
    },
  ];

  const columns = [
    {
      title: "Sayfa",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Durumu",
      dataIndex: "blog",
      key: "blog",
    },
    {},
    {
      title: "İşlem",
      render: (_, record, index) => (
        <Button
          type="primary"
          onClick={() => {
            window.location.href = `/admin/${record.key}`;
          }}
        >
          İncele
        </Button>
      ),
    },
  ];
  return (
    <div className="container">
      <Row>
        <Col xs={24} md={7}>
          <PersonelCard />
        </Col>
        <Col span={1}></Col>
        <Col xs={24} md={16}>
          {located === "/admin/user" ? (
            <AdminUser />
          ) : (
            <Table dataSource={dataSource} columns={columns} />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default AdminLayout;
