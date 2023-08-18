const { LitElement, html } = window;

class MyCard extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html` <div>
      <h1>Hello!</h1>
      <p>This is a good component!</p>
    </div>`;
  }
}

customElements.define("my-card", MyCard);
