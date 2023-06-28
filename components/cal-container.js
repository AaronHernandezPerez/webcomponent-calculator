const calContainerTemplate = document.createElement("template");
calContainerTemplate.innerHTML = `
<style>
.container {
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
}
</style>
<div class="container">
  <slot></slot>
</div>
`;

customElements.define(
  "cal-container",
  class extends HTMLElement {
    constructor() {
      super();
    }
  }
);
