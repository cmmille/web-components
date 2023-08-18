const { LitElement, html } = window;

class NameTag extends LitElement {
  static properties = {
    name: {},
  };

  constructor() {
    super();
    this.name = "";
  }

  changeName(event) {
    const input = event.target;
    this.name = input.value;
  }

  render() {
    const message = this.name ? `Hello, ${this.name}!` : "Hello!";
    return html` <style>
        .name-tag {
          border: 1px solid steelblue;
          border-radius: 4px;
          width: fit-content;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      </style>
      <div class="name-tag">
        <h1>${message}</h1>
        <input
          type="text"
          placeholder="Enter your name"
          @input=${this.changeName}
        />
      </div>`;
  }
}

customElements.define("name-tag", NameTag);
