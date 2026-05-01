"use client";

import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export default function ContactForm() {
  const { t } = useTranslation();
  const [result, setResult] = useState("");

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setResult(t("sending"));
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", "bf145460-567f-4169-be8e-c99e034cb032");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(t("success"));
        event.target.reset();
      } else {
        setResult(data.message);
      }
    },
    [t]
  );

  return (
    <div id="contact" className="pt-12 md:pt-16 max-w-[1600px] mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="grid md:grid-cols-12 gap-10 items-end pb-16 border-b border-line"
      >
        <div className="md:col-span-8">
          <div className="label-mono text-foreground-muted mb-3">
            ◇ get in touch — for new commissions
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] lowercase">
            get in <em className="font-serif-italic">touch</em>
          </h1>
        </div>
        <div className="md:col-span-4 md:text-right text-sm text-foreground-muted">
          <p>{t("sendMessage")}</p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-12 gap-10 pt-16">
        {/* Sticky meta */}
        <div className="md:col-span-4 md:sticky md:top-32 md:self-start space-y-8">
          <div>
            <div className="label-mono text-foreground-muted mb-2">studio</div>
            <div className="text-sm">são paulo, brasil</div>
          </div>
          <div>
            <div className="label-mono text-foreground-muted mb-2">coords</div>
            <div className="text-sm font-mono">23.55° s · 46.63° w</div>
          </div>
          <div>
            <div className="label-mono text-foreground-muted mb-2">hours</div>
            <div className="text-sm">mon — fri / 9 — 18</div>
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="md:col-span-8"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <label className="block">
              <span className="label-mono text-foreground-muted block mb-2">
                01 — {t("fullName")}
              </span>
              <input
                type="text"
                required
                name="name"
                className="w-full bg-transparent border-b border-foreground/30 py-3 text-base outline-none focus:border-foreground transition-colors duration-300"


              />
            </label>
            <label className="block">
              <span className="label-mono text-foreground-muted block mb-2">
                02 — e-mail
              </span>
              <input
                type="email"
                required
                name="email"
                className="w-full bg-transparent border-b border-foreground/30 py-3 text-base outline-none focus:border-foreground transition-colors duration-300"


              />
            </label>
          </div>

          <label className="block mb-10">
            <span className="label-mono text-foreground-muted block mb-2">
              03 — {t("message")}
            </span>
            <textarea
              rows="6"
              required
              name="message"
              className="w-full bg-transparent border-b border-foreground/30 py-3 text-base outline-none focus:border-foreground transition-colors duration-300 resize-none"


            ></textarea>
          </label>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <button
              type="submit"

              className="group relative inline-flex items-center gap-3 py-4 px-8 border border-foreground rounded-full transition-colors duration-500 hover:bg-foreground hover:text-background"
            >
              <span className="font-display lowercase text-2xl tracking-tight">
                {t("send")}
              </span>
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                ↗
              </span>
            </button>
            {result && (
              <p className="label-mono text-foreground-muted">— {result}</p>
            )}
          </div>
        </motion.form>
      </div>
    </div>
  );
}
