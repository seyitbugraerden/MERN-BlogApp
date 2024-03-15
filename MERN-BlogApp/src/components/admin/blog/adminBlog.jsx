import { Button, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminBlog() {
  const [blogData, setBlogData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blog");
        const allBlogs = response.data;
        const allUsers = await axios.get("http://localhost:5000/api/user");
        const users = allUsers.data;
        const matchedPerson = users.filter(
          (item) => item._id === JSON.parse(localStorage.getItem("user"))
        );
        const userBlog = allBlogs.filter(
          (item) => item.username === matchedPerson[0].username
        );
        setBlogData(userBlog);
      } catch (error) {
        message.error("Ulaşılamayan Blog");
      }
    };
    fetchData();
  }, []);
  const columns = [
    {
      title: "Blog Adı",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Blog İçeriği",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "İşlem",
      render: (text, record) => (
        <Button type="primary" onClick={() => console.log(record._id)}>
          İncele
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={blogData.map((item, index) => ({ ...item, key: index }))}
        columns={columns}
      />
    </div>
  );
}

export default AdminBlog;
