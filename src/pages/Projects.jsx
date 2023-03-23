import React from "react";
import { Tabs } from "antd";

export default function Projects() {
  const items = [
    {
      key: "1",
      label: (
        <div className="flex items-center justify-start gap-x-4">
          <img
            alt="Machine Learning"
            className="h-5"
            src="https://img.icons8.com/external-becris-flat-becris/64/null/external-machine-learning-data-science-becris-flat-becris.png"
          />
          <div className="text-primary text font-bold">Machine Learning</div>
        </div>
      ),
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: (
        <div className="flex items-center justify-start gap-x-4">
          <img
            alt="Web Development"
            className="h-5"
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-web-development-seo-flaticons-lineal-color-flat-icons.png"
          />
          <div className="text-primary text font-bold">
            Full Stack Web Development
          </div>
        </div>
      ),
      children: `Content of Tab Pane 2`,
    },
  ];
  const onChange = () => {};
  return (
    <>
      <h1 className="text-4xl text-neutral-content font-bold">Projects</h1>
      <Tabs
        className="mt-6"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </>
  );
}
