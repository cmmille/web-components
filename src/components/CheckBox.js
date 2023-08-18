const { LitElement, html } = window;

export class CheckBox extends LitElement {
  static properties = {
    checked: {},
  };

  constructor() {
    super();
    this.checked = false;
  }

  setChecked(e) {
    this.checked = e.target.checked;
  }

  render() {
    return html`
      <div>
        <input type="text" value="Hello there." ?disabled=${this.checked} />
      </div>
      <label>
        <input type="checkbox" @change=${this.setChecked} /> Disable
        Input</label
      >
    `;
  }
}

customElements.define("check-box", CheckBox);
