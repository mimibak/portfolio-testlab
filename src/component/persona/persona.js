import { fetchData } from "../api/fetchData.js";
import { replaceSocialMedia } from "./socialMedia.js";

export async function getData() {
  try {
    let dataPersona = await fetchData();

    const newName = dataPersona.persona.name;
    const newTelephone = dataPersona.persona.phone;
    const newEmail = dataPersona.persona.email;
    const newWebsite = dataPersona.persona.website;

    const nameElement = document.querySelectorAll("[data-persona-name]");
    if (nameElement.length > 0) {
      [...nameElement].map((name) => (name.innerText = newName));
    }

    const phoneElement = document.querySelector("[data-persona-phone]");
    if (phoneElement) phoneElement.innerText = newTelephone;

    const emailElement = document.querySelector("[data-persona-email]");
    if (emailElement) emailElement.innerText = newEmail;

    const websiteElement = document.querySelector("[data-persona-website]");
    if (websiteElement) websiteElement.innerText = newWebsite;

    // Social Media Links austauschen
    replaceSocialMedia();

    // Job-titel wird gesetzt
    const titeljob = document.querySelector(".persona__job_title");
    if (titeljob) {
      titeljob.innerText = dataPersona.persona.jobtitle;
    }

    // Slogan wird gesetzt
    const sloganText = document.querySelector(".persona__slogan");
    if (sloganText) {
      sloganText.innerText = dataPersona.persona.description.slogan;
      console.log(dataPersona.persona.description);
    }

    // About wird gesetzt
    const aboutText = document.querySelector(".persona__selfdescription");
    if (aboutText) {
      aboutText.innerText = dataPersona.persona.description.about;
    }
  } catch (error) {
    console.error("Fehler beim Abrufen der Daten:", error);
  }
}

getData();
