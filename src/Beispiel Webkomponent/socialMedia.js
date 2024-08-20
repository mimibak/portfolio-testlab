export class SocialMediaIcons extends HTMLElement {
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

        <div class="persona__social_media_icons">
          <a href="https://www.facebook.com/IhrProfil" target="_blank" rel="noopener noreferrer">
            <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-facebook-4.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/IhrProfil" target="_blank" rel="noopener noreferrer">
            <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/96/iconmonstr-twitter-4.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/IhrProfil" target="_blank" rel="noopener noreferrer">
            <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-instagram-14.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/IhrProfil" target="_blank" rel="noopener noreferrer">
            <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-4.png" alt="LinkedIn" />
          </a>
        </div>
      `;
    } catch (error) {
      console.error("Error loading or parsing data:", error);
      this.shadowRoot.innerHTML = `
      <p>Data could not be loaded.</p>
    `;
    }
  }
}

customElements.define("social-media-icons", SocialMediaIcons);
