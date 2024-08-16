class PersonaImgJob extends HTMLElement {
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
          <section class="persona__img_job">
            <div class="persona__img_container">
              <img
                src="../img/profile_JohnDoe.jpg"
                alt="Image of John Doe"
                class="persona__img"
              />
            </div>
            <div class="persona__job_title">${data.persona.jobtitle}</div>
            <div class="persona__slogan" id="slogan">
              ${data.persona.description.slogan}
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

customElements.define("persona-img-job", PersonaImgJob);
