import { Card } from "antd";
export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-neutral-content font-bold">About Me</h1>
      <div className="mt-4 text-gray-600 text-lg flex flex-col gap-y-6">
        <p>
          Hello and welcome to my portfolio website! I am a highly skilled
          Machine Learning Engineer with expertise in TensorFlow. My passion
          lies in developing cutting-edge AI models that solve complex problems
          and drive innovation.
        </p>
        <p>
          In addition to my machine learning skills, I am also experienced in
          full-stack web development. My proficiency in web development allows
          me to create seamless user experiences and build applications that are
          both beautiful and functional.
        </p>
        <p>
          Furthermore, I am skilled in Microsoft Azure Administration. I am able
          to configure and manage cloud resources, ensuring optimal performance
          and security for any application or project.
        </p>
        <p>
          With a deep passion for technology and a commitment to excellence, I
          am always seeking new challenges and opportunities to grow my skills.
          Thank you for visiting my website, and I look forward to connecting
          with you.
        </p>
      </div>
      <h1 className="text-4xl text-neutral-content font-bold mt-7">
        What I do!
      </h1>
      <div className="mt-4 flex gap-x-5">
        <Card
          title={
            <div className=" flex items-center">
              <div className="text-neutral-content text-xl font-bold">
                Card Title
              </div>
            </div>
          }
          bordered={true}
          style={{
            width: 300,
          }}
          headStyle={{ border:"none" }}
          className="bg-transparent text-neutral-content border-gray-600 border-2"
        >
          <p></p>
        </Card>
      </div>
    </>
  );
}
