const calButtonTemplate = document.createElement("template");
calButtonTemplate.innerHTML = `
<style>
.button{
  padding: .25rem;
  width: 100%;
  font-size: 4vh;
  background-color: #636363;
  color: #ffF;
}
.button[large=true]{
  min-height: 10rem;
}
</style>
`;

const colors = {
  danger: {
    color: "#fff",
    backgroundColor: "#FF1D1E",
  },
  accent: {
    color: "#040404",
    backgroundColor: "#FFFFFF",
  },
  warning: {
    color: "#040404",
    backgroundColor: "#F29E3B",
  },
};

customElements.define(
  "cal-button",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.append(calButtonTemplate.content.cloneNode(true));

      const button = document.createElement("button");
      button.classList.add("button");
      button.setAttribute("large", true);
      button.innerHTML = `<slot></slot>`;
      this.button = button;

      shadowRoot.append(button);
    }

    static get observedAttributes() {
      return ["disabled", "large", "type"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "disabled":
          this.button.disabled = newValue;
          break;
        case "large":
          this.button.setAttribute("large", newValue);
          break;
        case "type":
          this.button.setAttribute("type", newValue);
          this.button.style.setProperty("color", colors[newValue].color);
          this.button.style.setProperty(
            "background-color",
            colors[newValue].backgroundColor
          );

          break;

        default:
          break;
      }
    }
  }
);
