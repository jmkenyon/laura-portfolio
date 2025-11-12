"use client"

import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("enviando....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "9561feae-822a-4d1a-abe7-7b66cf150052");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
        setResult("sucesso");
        event.target.reset();
      } else {
        console.log("erro", data);
        setResult(data.message);
      }
    };

  return (
    <div
    id="contact"
    className="p-4"
  >
    <h4
      className="text-center text-lg mb-2 text-gray-600 dark:text-gray-300"
    >
      Drop me a message.
    </h4>
    <h2

      className="text-4xl font-bold text-center mb-8"
    >
      Get in touch
    </h2>
    <form
      onSubmit={onSubmit}
      className="max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
        <input

          className="flex-1 text-black p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
           dark:border-white/90 "
          type="text"
          placeholder="Enter your name"
          required
          name="name"
        />
        <input
   
          className="flex-1 text-black p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          type="email"
          placeholder="Enter your email"
          required
          name="email"
        />
      </div>
      <textarea

        rows="6"
        placeholder="Enter your message"
        className="text-black w-full p-4 outline-none border-[0.5px]
      border-gray-400 rounded-md bg-white mb-6 "
        required
        name="message"
      ></textarea>
      <button

        type="submit"
        className="mouse-pointer py-3 px-8 w-max flex items-center justify-between
      gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
      >
        Submit
      </button>
      <p className="mt-4">{result}</p>
    </form>
  </div>
  );
}