import React from "react";

const ContactForm = () => {
  const onFinish = (values: any) => {
    console.log("Form values:", values);
    // Do something with form values, such as send them to a server
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Form validation failed:", errorInfo);
  };

  return (
    <div className="min-h-screen  text-white flex items-center justify-center">
      <form className="w-96 space-y-6">
        <div>
          <label className="block mb-2">Name</label>
          <input
            className="w-full p-2 rounded bg-gray-800 text-white border border-primary"
            type="text"
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            className="w-full p-2 rounded bg-gray-800 text-white border border-primary"
            type="email"
          />
        </div>
        <div>
          <label className="block mb-2">Message</label>
          <textarea
            className="w-full p-2 rounded bg-gray-800 text-white border border-primary"
            rows={4}
          ></textarea>
        </div>
        <button className="w-full py-2 px-4 rounded bg-primary text-gray-800 font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
