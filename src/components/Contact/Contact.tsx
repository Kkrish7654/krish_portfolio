import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <section className="mt-[8rem] min-h-screen text-element">
        <div>
          <h2 className="text-[3rem] text-gray uppercase font-semibold font-montserrat">
            Contact Me
          </h2>
        </div>

        <div className="min-h-screen bg-gray-100">
          <div className="shadow-md rounded-lg py-4 w-full sm:w-2/3 lg:w-1/3 text-gray">
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border bg-transparent rounded-md outline-none border-primary"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600  font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border bg-transparent rounded-md outline-none border-primary"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600  font-semibold">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border bg-transparent rounded-md outline-none border-primary"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary text-black px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
