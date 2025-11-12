"use client";

import i18n from "i18next";
import { send } from "process";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome!",
      about: "about me",
      projects: "projects",
      contact: "contact",
      sendMessage: "send a message",
      message: "message",
      fullName: "full name",
      send: "send"
    },
  },
  "pt-BR": {
    translation: {
      welcome: "Bem-vindo!",
        about: "sobre mim",
      projects: "projetos",
      contact: "contato",
      sendMessage: "mande uma mensagem",
      message: "mensagem",
      fullName: "nome completo",
      send: "enviar"
    },
  },
};

// Avoid reinitializing multiple times during hot reloads
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "pt-BR",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

export default i18n;