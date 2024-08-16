import "./personaContact";
import "./personaMid";
import "./personaWc";

class CombinedComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <div>
          <persona-img-job></persona-img-job>
          <persona-name-info></persona-name-info>
          <persona-contact-info></persona-contact-info>
        </div>
      `;
  }

  connectedCallback() {
    import("./personaContact.js");
    import("./personaMid.js");
    import("./personaWc.js");
  }
}

customElements.define("combined-component", CombinedComponent);
