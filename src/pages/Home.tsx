import { AiIcon, CloudIcon, WebDevIcon } from "../assets";
import CardFlip from "../components/CardFlip";

const IconsLinks = {
  "Machine Learning Engineer":
    "https://img.icons8.com/external-becris-flat-becris/64/null/external-machine-learning-data-science-becris-flat-becris.png",
  Python: "https://img.icons8.com/stickers/100/null/python.png",
  "React.js": "https://img.icons8.com/bubbles/50/null/react.png",
  "node.js": "https://img.icons8.com/fluency/48/null/node-js.png",
  "Web Development":
    "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-web-development-seo-flaticons-lineal-color-flat-icons.png",
  django:
    "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-shadow-tal-revivo.png",
  flask: "https://img.icons8.com/nolan/64/flask.png",
  TensorFlow: "https://img.icons8.com/color/48/null/tensorflow.png",
  Azure: "https://img.icons8.com/color/48/null/azure-1.png",
};

export default function Home() {
  return (
    <>
      <h1 className="text-4xl text-neutral-content font-bold">About Me</h1>
      <div className="mt-4 text-gray-600 text-lg flex flex-col gap-y-6">
        <p>
          I am Hassan Zaidi, and I like to think (It's a hobby of mine). I am
          very sure of where I am going and understand the speedbumps are part
          of that journey. I have limitless aspirations and the tool to get what
          I want it hard work. No two ways about it.
        </p>
      </div>
      <h1 className="text-4xl text-neutral-content font-bold mt-7">
        What I do!
      </h1>
      <div className="mt-4 flex gap-10 flex-wrap">
        <CardFlip
          type="hover"
          frontNode={
            <>
             <div className="flex flex-col items-center justify-start gap-x-4">
                <img
                  alt="Machine Learning"
                  className="h-14 object-contain rounded-xl "
                  src={IconsLinks["Machine Learning Engineer"]}
                />
                <div className="text-neutral-content text-lg font-bold text-center mt-3">
                  Machine Learning Engineer
                </div>
              </div>
              
            </>
          }
          backNode={
            <>
             <div className="flex flex-col items-center justify-start gap-x-4">
                <img
                  alt="Machine Learning"
                  className="h-20 object-contain rounded-xl "
                  src={AiIcon}
                />
                <div className="text-neutral-content text-lg font-bold text-center mt-3">
                  Machine Learning Engineer
                </div>
              </div>
            </>
          }
        />
        <CardFlip
          type="hover"
          frontNode={
            <>
              <div className="flex flex-col items-center justify-start gap-x-4">
                <img
                  alt="Machine Learning"
                  className="h-14 object-contain rounded-xl "
                  src={IconsLinks["Azure"]}
                />
                <div className="text-neutral-content text-lg font-bold text-center mt-3">
                  Azure Administration
                </div>
              </div>
            </>
          }
          backNode={
            <>
              <div className="flex flex-col items-center justify-start gap-x-4">
                <img
                  alt="Machine Learning"
                  className="h-20 object-contain rounded-xl "
                  src={CloudIcon}
                />
                <div className="text-neutral-content text-lg font-bold text-center mt-3">
                  Azure Administration
                </div>
              </div>
            </>
          }
        />
        <CardFlip
          type="hover"
          frontNode={
            <>
              <div className="flex flex-col items-center justify-start gap-x-4">
                <img
                  alt="Web Development"
                  className="h-14 object-contain rounded-xl "
                  src={IconsLinks["Web Development"]}
                />
                <div className="text-neutral-content text-lg font-bold text-center mt-3">
                  Web Development
                </div>
              </div>
            </>
          }
          backNode={
            <>
              <div className="flex flex-col items-center justify-start gap-x-4">
                <img
                  alt="Web Development"
                  className="h-20 object-contain rounded-xl "
                  src={WebDevIcon}
                />
                <div className="text-neutral-content text-lg font-bold text-center mt-3">
                  Web Development
                </div>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
