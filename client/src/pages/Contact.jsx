import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-32 py-12 bg-white dark:bg-dark text-gray-800 dark:text-white"
    >
      <h4 className="text-center mb-2 text-lg underline font-medium">Contact with me</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-bold">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-4 mb-12 text-gray-600 dark:text-gray-300">
        I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
      </p>

      <form
        method="POST"
        action="https://api.web3forms.com/submit"
        className="max-w-2xl mx-auto space-y-6"
      >
        <input type="hidden" name="access_key" value="098668d0-f71b-4b9c-89f2-ef6f98256198" />

        {/* Row Inputs */}
        <div className="flex flex-col sm:flex-row gap-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="flex-1 p-4 rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-0"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="flex-1 p-4 rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Message Box */}
        <textarea
          name="message"
          required
          rows="6"
          placeholder="Enter your messages"
          className="w-full p-4 rounded-md border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 resize-none focus:outline-none focus:ring-0"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="mx-auto flex items-center gap-2 justify-center bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full hover:opacity-90 transition duration-300 cursor-pointer"
        >
          Submit now
          <img src={assets.white_arrow_icon} className="w-4 dark:invert" alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
