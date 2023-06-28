const calDisplayTemplate = document.createElement("template");
calDisplayTemplate.innerHTML = `
<style>
  .display {
    font-size: 4vh;
    padding: 1rem;
    background-color: #94AEA5;
    border: 48px solid #CDC9C8;
    text-align: right;
  }
  .value-line {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    font-size: 2vh;
  }
  .value {
    margin-right: .25rem;
    overflow-x: auto;
  }
</style>

<div class="display">
  <div class="value-line">
    <div class="value">
      <slot name="value"></slot>
    </div>
    <div class="operation">
      <slot name="operation"></slot>
    </div>
  </div>
  <slot></slot>
</div>
`;

customElements.define(
  "cal-display",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });

      shadowRoot.append(calDisplayTemplate.content.cloneNode(true));
    }
  }
);
