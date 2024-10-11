"use client";

import React from "react";
import { Form, Button, Input, Checkbox } from "antd";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      router.push("/pages/dashboard");
    }, 3000);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container flex flex-col items-center justify-center h-screen mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 p-8 border-2 border-gray-300 rounded-lg">
        <p className="text-2xl font-bold tracking-widest uppercase">Login</p>

        <Form name="basic" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              onClick={handleClick}
              className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
