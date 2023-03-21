import { Card, Typography } from "antd";
import React from "react";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import ContactForm from "../components/ContactForm";

const { Paragraph } = Typography;

export default function Contact() {
  return (
    <>
      <h1 className="text-4xl text-neutral-content font-bold">Contact</h1>
      <div className="mt-6 text-gray-600 text-lg flex flex-wrap justify-between gap-6">
        <Card className="bg-base-100 border-none w-[48%]" style={{ minWidth: 300 }}>
          <div className="flex gap-x-3 items-base">
            <PhoneOutlined className="text-2xl text-primary" />
            <span className="text-primary-focus text-xl">Phone:</span>
          </div>
          <div className="flex flex-col gap-y-1 ml-8">
            <Paragraph className="text-gray-600 text-lg " copyable>
              +923350552250
            </Paragraph>
          </div>
        </Card>
        <Card className="bg-base-100 border-none w-[48%]" style={{ minWidth: 300 }}>
          <div className="flex gap-x-3 items-base">
            <MailOutlined className="text-2xl text-primary" />
            <span className="text-primary-focus text-xl">Email:</span>
          </div>
          <div className="flex flex-col gap-y-1 ml-8">
            <Paragraph className="text-gray-600 text-lg" copyable>
              hassanzaidi4@gmail.com
            </Paragraph>
            <Paragraph className="text-gray-600 text-lg" copyable>
              hassanzaidi4practicing@gmail.com
            </Paragraph>
            <Paragraph className="text-gray-600 text-lg" copyable>
              hassan@skilledin.io
            </Paragraph>
          </div>
        </Card>
      </div>
      <ContactForm />
    </>
  );
}
