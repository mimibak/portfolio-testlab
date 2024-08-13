import { fetchData } from "../api/fetchData.js";
import { replaceSocialMedia } from "./socialMedia.js";

export async function getData() {
  try {
    let dataPersona = await fetchData();
    console.log(dataPersona);

    const newName = dataPersona.persona.name;
    const newTelephone = dataPersona.persona.phone;
    const newEmail = dataPersona.persona.email;
    const newWebsite = dataPersona.persona.website;

    // Elemente auswählen und Inhalte aktualisieren
    const nameElement = document.getElementById("name");
    if (nameElement) nameElement.textContent = newName;

    const phoneElement = document.getElementById("phone");
    if (phoneElement) phoneElement.textContent = newTelephone;

    const emailElement = document.getElementById("email");
    if (emailElement) emailElement.textContent = newEmail;

    const websiteElement = document.getElementById("website");
    if (websiteElement) websiteElement.textContent = newWebsite;

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
