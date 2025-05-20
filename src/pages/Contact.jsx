import React, { useRef, useState } from "react";
import { Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_y4md3ut", "template_l8vfwns", form.current, "9yptULX8JJv5kdRYc")
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      )
      .finally(() => setIsSending(false));
  };
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-10 space-y-12">
      <div className="w-4/5">
        <div>
          <h2 className="text-3xl font-bold mb-2">Contact</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Let's get in touch</p>
          <hr className="border-gray-300 dark:border-gray-700" />
        </div>

        <div>
          <p className="text-lg font-semibold mb-3 mt-3">Find me on</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border bg-gray-100 text-black dark:bg-gray-800 dark:text-white">
              <h3 className="font-semibold text-lg mb-1">Explore the code</h3>
              <p className="text-sm mb-3">Explore the source code for all my projects on GitHub.</p>
              <a
                href="https://github.com/azkaa23"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                Go to GitHub ↗
              </a>
            </div>

            <div className="p-6 rounded-xl border bg-blue-100 text-black dark:bg-blue-900 dark:text-white">
              <h3 className="font-semibold text-lg mb-1">Let`s connect</h3>
              <p className="text-sm mb-3">Connect for collaboration or explore my professional experience.</p>
              <a
                href="https://www.linkedin.com/in/azka2302/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Go to LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold mb-3 mt-3">Or send me a message</p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow border dark:border-gray-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 w-full bg-white text-gray-900 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 w-full bg-white text-gray-900 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              required
              className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 w-full bg-white text-gray-900 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              {isSending ? "Sending..." : "Send Email"}
            </button>
            {success && (
              <p className="text-green-600 dark:text-green-400 mt-2 text-center">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
