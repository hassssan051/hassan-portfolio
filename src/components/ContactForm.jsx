import React from "react";
import { Form, Input, Button } from "antd";

const ContactForm = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
    // Do something with form values, such as send them to a server
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Form validation failed:", errorInfo);
  };

  return (
    <div className="mt-6 border-2 rounded-xl p-8 border-gray-600">
      <h1 className="text-4xl mt-3 text-neutral-content font-bold text-center">
        I love to talk, lets get in touch!
      </h1>
      <Form
        className="px-24 mt-16"
        name="contact"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label={<span className="text-primary w-20 text-start">Email</span>}
          name="email"
          rules={[
            {
              type: "email",
              message: "Please enter a valid email address",
            },
            {
              required: true,
              message: "Please enter your email",
            },
          ]}
        >
          <Input
            className="bg-base-100 border-base-100 text-primary-focus placeholder-primary-focus"
            placeholder="Enter your Email"
          />
        </Form.Item>
        <Form.Item
          label={<span className="text-primary w-20 text-start">Name</span>}
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
          ]}
        >
          <Input
            className="bg-base-100 border-base-100 text-primary-focus placeholder-primary-focus"
            placeholder="Enter your Name"
          />
        </Form.Item>
        <Form.Item
          label={<span className="text-primary w-20 text-start">Message</span>}
          name="message"
          rules={[
            {
              required: true,
              message: "Please enter your message",
            },
          ]}
        >
          <Input.TextArea
            rows={4}
            className="bg-base-100 border-base-100 text-primary-focus placeholder-primary-focus"
            placeholder="Let it out, let me know!"
          />
        </Form.Item>
        <Form.Item>
          <div className="text-center w-full">
            <Button
              className="bg-primary text-primary-content font-semibold hover:bg-primary-focus hover:text-primary-content"
              type={null}
              htmlType="submit"
            >
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
