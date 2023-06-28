const calGridTemplate = document.createElement("template");
calGridTemplate.innerHTML = `
<style>
.cal-grid {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
}
</style>

<div class="cal-grid">
  <slot></slot>
</div>
`;

customElements.define(
  "cal-grid",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });

      shadowRoot.append(calGridTemplate.content.cloneNode(true));
    }

    static get observedAttributes() {
      return ["columns", "rows"];
    }

    setColumns(columns) {
      this.style.setProperty("--columns", columns);
    }

    setRows(rows) {
      this.style.setProperty("--rows", rows);
    }

    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "columns":
          // set columns
          // this.columns = newValue;
          this.setColumns(newValue);
          break;

        case "rows":
          // this.rows = newValue;
          this.setRows(newValue);
          break;

        default:
          break;
      }
    }
  }
);
