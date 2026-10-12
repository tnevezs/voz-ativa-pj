/*
  VOZ ATIVA — configurações do site
  IMPORTANTE: substitua o número abaixo pelo WhatsApp oficial da empresa.
  Use código do país + DDD + número, somente dígitos. Exemplo fictício: 5511999999999
*/
const WHATSAPP_NUMBER = "5511999999999";
const DEFAULT_MESSAGE = "Olá! Gostaria de saber mais sobre a assessoria Voz Ativa.";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-whatsapp]").forEach(link => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
    link.href = url;
    link.addEventListener("click", event => {
      if (WHATSAPP_NUMBER === "5511999999999") {
        event.preventDefault();
        alert("Antes de publicar, abra assets/script.js e substitua WHATSAPP_NUMBER pelo número oficial da Voz Ativa.");
      }
    });
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#menu-principal");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      nav.classList.toggle("is-open", !isOpen);
    });
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
        nav.classList.remove("is-open");
      });
    });
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      if (WHATSAPP_NUMBER === "5511999999999") {
        const status = document.querySelector("#form-status");
        if (status) status.textContent = "Configure o número oficial no arquivo assets/script.js antes de usar o formulário.";
        alert("Antes de usar o formulário, abra assets/script.js e configure o número oficial da Voz Ativa.");
        return;
      }
      const data = new FormData(form);
      const message = [
        "Olá! Gostaria de conversar com a Voz Ativa.",
        "",
        `Nome: ${data.get("name")}`,
        `Instituição: ${data.get("organization") || "Não informado"}`,
        `E-mail: ${data.get("email")}`,
        `Assunto: ${data.get("subject")}`,
        `Mensagem: ${data.get("message")}`
      ].join("\n");
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
  }
});