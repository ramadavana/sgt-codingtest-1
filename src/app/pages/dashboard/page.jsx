"use client";

import React from "react";
import { Table, Input, Button } from "antd";
import axios from "axios";

export default function Dashboard() {
  const [getTableData, setTableData] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://universities.hipolabs.com/search").then((res) => {
      setTableData(res.data);

      console.log(res.data);
    });
  }, []);

  const handleFilter = () => {
    const name = document.getElementById("name").value;
    const country = document.getElementById("country").value;
    axios
      .get(`http://universities.hipolabs.com/search?&country=${country}&name=${name}`)
      .then((res) => {
        setTableData(res.data);

        console.log(res.data);
      });
  };

  return (
    <div className="container flex flex-col items-center justify-center max-w-screen-lg mx-auto my-8">
      <div className="flex flex-col items-center justify-center w-full gap-4 p-8 border-2 border-gray-300 rounded-lg">
        <p className="text-2xl font-bold">Dashboard</p>

        {/* Filter name and country using inputs*/}

        <div className="flex items-center justify-center gap-4 p-4">
          <Input placeholder="Name" type="text" id="name" />

          <Input placeholder="Country" type="text" id="country" />

          <Button type="primary" htmlType="submit" onClick={handleFilter}>
            Filter
          </Button>
        </div>

        <Table
          className="w-full"
          dataSource={getTableData}
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              key: "name",
            },
            {
              title: "Country",
              dataIndex: "country",
              key: "country",
            },
            {
              title: "Website",
              dataIndex: "web_pages",
              key: "web_pages",
            },
            {
              title: "Code",
              dataIndex: "alpha_two_code",
              key: "alpha_two_code",
            },
          ]}
          pagination={{ position: ["bottomCenter"] }}
        />
      </div>
    </div>
  );
}
