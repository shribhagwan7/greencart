import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./images/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg Poppins underline">Contact with me</h4>
      <h2 className="text-center text-5xl Poppins">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 Poppins">
        I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
      </p>

      <form
        method="POST"
        action="https://api.web3forms.com/submit"
        className="max-w-2xl mx-auto"
      >
        <input
          type="hidden"
          name="access_key"
          value="098668d0-f71b-4b9c-89f2-ef6f98256198"
        />

        {/* 👇 Responsive Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>

        {/* 👇 Message Box */}
        <textarea
          rows="6"
          name="message"
          placeholder="Enter your messages"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
        ></textarea>

        {/* 👇 Submit Button */}
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover cursor-pointer"
        >
          Submit now
          <img src={assets.white_arrow_icon} className="w-4" alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default Contact;

