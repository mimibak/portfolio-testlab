class PersonaNameInfo extends HTMLElement {
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
        <section class="persona__name_info">
          <h1 class="persona__name" data-persona-name>${data.persona.name}</h1>
          <p class="persona__selfdescription">
            ${data.persona.description.about}
          </p>
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

customElements.define("persona-name-info", PersonaNameInfo);
