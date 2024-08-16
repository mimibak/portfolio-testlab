import "./socialMedia.js"; // Importiere die SocialMediaIcons-Komponente

class PersonaContactInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      const response = await fetch("../component/api/db.json");
      const data = await response.json();
      this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="../styles/style.css" />

      <section class="persona__contact_info">
        <h3>Contact Info</h3>
        <div class="persona__contact_info_container">
          <div class="persona__contact name">
            <div class="persona__contact_label">Name:</div>
            <div class="persona__contact_value" data-persona-name>
              John Doe
            </div>
          </div>
          <div class="persona__contact telephone">
            <div class="persona__contact_label">Telefon:</div>
            <div class="persona__contact_value" data-persona-phone>
              +49 123 456789
            </div>
          </div>
          <div class="persona__contact email">
            <div class="persona__contact_label">Email:</div>
            <div class="persona__contact_value" data-persona-email>
              john.doe@example.com
            </div>
          </div>
          <div class="persona__contact website">
            <div class="persona__contact_label">Website:</div>
            <div class="persona__contact_value" data-persona-website>
              www.johndoe.com
            </div>
          </div>
        </div>
        <social-media-icons></social-media-icons> <!-- Social Media Webkomponente -->
        <div class="persona__download_cv">
          <a href="/images/myw3schoolsimage.jpg" download="my-cv">
            <p>Download Resume</p>
          </a>
        </div>
      </section>
    `;
    } catch (error) {
      console.error("Error loading or parsing data:", error);
      this.shadowRoot.innerHTML = `
      <p>Data could not be loaded.</p>
    `;
    }
  }
}

customElements.define("persona-contact-info", PersonaContactInfo);
