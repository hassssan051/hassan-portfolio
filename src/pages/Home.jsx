import { Card, Tooltip } from "antd";
export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-neutral-content font-bold">About Me</h1>
      <div className="mt-4 text-gray-600 text-lg flex flex-col gap-y-6">
        <p>
          Hello and welcome to my world! I am a highly skilled Machine Learning
          Engineer with expertise in TensorFlow. My passion lies in developing
          cutting-edge AI models that solve complex problems and drive
          innovation.
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
      <div className="mt-4 flex gap-10 flex-wrap">
        <Card
          bordered={true}
          title={
            <div className="flex items-center justify-start gap-x-4">
              <img
                alt="Machine Learning"
                className="h-8"
                src="https://img.icons8.com/external-becris-flat-becris/64/null/external-machine-learning-data-science-becris-flat-becris.png"
              />
              <div className="text-neutral-content text-xl font-bold">
                Machine Learning Engineer
              </div>
            </div>
          }
          style={{
            width: 400,
          }}
          headStyle={{ border: "none" }}
          actions={[
            <span className="text-primary  font-semibold hover:underline">
              Go to projects
            </span>,
          ]}
          className="bg-base-100 shover:shadow-xl hover:shadow-red text-neutral-content border-base-100 border-2"
        >
          <p className="min-h-[280px]">
            I'm a Machine Learning Engineer, or as I like to think of myself, a
            digital detective. I spend my days working with data to uncover
            patterns and insights that help solve real-world problems. Whether
            it's predicting customer behavior, identifying fraudulent activity,
            or creating personalized recommendations, I use my expertise in
            artificial intelligence and statistical analysis to turn data into
            actionable insights. In a world where data is king, I'm proud to be
            part of a new generation of problem-solvers that harness the power
            of machine learning to make the impossible, possible.
          </p>
          <div className="flex gap-x-4 mt-4 items-center">
            <div className="text-primary font-bold">Tech Stack:</div>
            <Tooltip title="TensorFlow">
              <img
                alt="TensorFlow"
                className="h-8"
                src="https://img.icons8.com/color/48/null/tensorflow.png"
              />
            </Tooltip>
            <Tooltip title="Python">
              <img
                alt="Python"
                className="h-8"
                src="https://img.icons8.com/stickers/100/null/python.png"
              />
            </Tooltip>
          </div>
        </Card>
        <Card
          bordered={true}
          title={
            <div className="flex items-center justify-start gap-x-4">
              <img
                alt="Web Development"
                className="h-8"
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-web-development-seo-flaticons-lineal-color-flat-icons.png"
              />
              <div className="text-neutral-content text-xl font-bold">
                Full Stack Web Development
              </div>
            </div>
          }
          style={{
            width: 400,
          }}
          actions={[
            <span className="text-primary  font-semibold hover:underline">
              Go to projects
            </span>,
          ]}
          headStyle={{ border: "none" }}
          className="bg-base-100 shover:shadow-xl hover:shadow-red text-neutral-content border-base-100 border-2"
        >
          <p className="min-h-[280px]">
            I'm a Web Developer, a digital wizard who transforms ideas into
            interactive and captivating online experiences. I specialize in
            coding languages like HTML, CSS, and JavaScript to craft beautiful,
            responsive, and user-friendly websites. Whether it's creating custom
            designs from scratch, optimizing website performance, or developing
            complex web applications, I bring creativity, innovation, and
            technical expertise to every project I work on. In a world where the
            internet is an essential part of our lives, I'm proud to be part of
            a new generation of innovators that build the digital world we all
            live in.
          </p>

          <div className="flex gap-x-4 mt-4 items-center">
            <div className="text-primary font-bold">Tech Stack:</div>
            <Tooltip title="React.js">
              <img
                alt="React"
                className="h-8"
                src="https://img.icons8.com/bubbles/50/null/react.png"
              />
            </Tooltip>
            <Tooltip title="node.js">
              <img
                alt="node.js"
                className="h-8"
                src="https://img.icons8.com/fluency/48/null/node-js.png"
              />
            </Tooltip>
            <Tooltip title="django">
              <img
                alt="django"
                className="h-8"
                src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png"
              />
            </Tooltip>
            <Tooltip title="flask">
              <img
                alt="flask"
                className="h-8"
                src="https://img.icons8.com/nolan/64/flask.png"
              />
            </Tooltip>
          </div>
        </Card>
        <Card
          bordered={true}
          title={
            <div className="flex items-center justify-start gap-x-4">
              <img
                alt="Web Development"
                className="h-8"
                src="https://img.icons8.com/color/48/null/azure-1.png"
              />
              <div className="text-neutral-content text-xl font-bold">
                Azure Cloud Administrator
              </div>
            </div>
          }
          style={{
            width: 400,
          }}
          headStyle={{ border: "none" }}
          actions={[
            <span className="text-primary  font-semibold hover:underline">
              Go to projects
            </span>,
          ]}
          className="bg-base-100 shover:shadow-xl hover:shadow-red text-neutral-content border-base-100 border-2"
        >
          <p className="min-h-[280px]">
            I'm a Azure certified Cloud Administrator, a digital architect who
            builds and maintains the infrastructure that powers the digital
            world. My expertise lies in Microsoft Azure, a powerful cloud
            platform that enables businesses to innovate faster, scale
            seamlessly, and operate with greater agility. Whether it's
            configuring virtual machines, managing storage and networking
            resources, or optimizing security and compliance, I use my technical
            skills and industry knowledge to ensure that cloud environments are
            always available, performant, and secure. In a world where
            technology drives business success, I'm proud to be part of a new
            generation of innovators that leverage the power of cloud computing
            to build the future.
          </p>
        </Card>
      </div>
    </>
  );
}
