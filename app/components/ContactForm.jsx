"use client"


import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const [result, setResult] = useState("");

  const onSubmit = useCallback( async (event) =>  
   {
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
    }, []);
  
  

  return (
    <div
    id="contact"

  >
    <h2

      className="text-sm text-center py-8 text-black"
    >
      {t("sendMessage")}
    </h2>
    <form
      onSubmit={onSubmit}
      className="max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
        <input

          className="flex-1 text-black p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          type="text"
          placeholder={t("fullName")}
          required
          name="name"
        />
        <input
   
          className="flex-1 text-black p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          type="email"
          placeholder="e-mail"
          required
          name="email"
        />
      </div>
      <textarea

        rows="6"
        placeholder={t("message")}
        className="text-black w-full p-4 outline-none border-[0.5px]
      border-gray-400 rounded-md bg-white mb-6"
        required
        name="message"
      ></textarea>
      <button

        type="submit"
        className="cursor-pointer py-3 px-8 w-max flex items-center justify-between
      gap-2 text-black rounded-full mx-auto duration-500  hover:text-gray-400"
      >
        {t("send")}
      </button>
      <p className="mt-4">{result}</p>
    </form>
  </div>
  );
}