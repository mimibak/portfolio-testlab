export { PersonaContactInfo } from "./personaContact.js";
export { PersonaImgJob } from "./personaWc.js";
export { PersonaNameInfo } from "./personaMid.js";

export class CombinedComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
          <div>
            <slot> 
            <persona-img-job></persona-img-job>
            <persona-name-info></persona-name-info>
            <persona-contact-info></persona-contact-info></slot>
          </div>
        `;
  }
}

customElements.define("combined-component", CombinedComponent);
