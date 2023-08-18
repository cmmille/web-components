class ToDoItem extends HTMLElement {
  constructor() {
    super();

    this.template = this.createTemplate();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.template.content.cloneNode(true));
    this.checkbox = shadow.querySelector("input[type='checkbox']");
  }

  // declare which attributes should call attributesChangedCallback
  static get observedAttributes() {
    return ["checked"];
  }

  // runs whenever the named observed attributes changes
  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === "checked") {
      this.updateChecked(newValue);
    }
  }

  // called when first added to DOM
  connectedCallback() {
    console.log("connected");
  }

  //  called when removed from DOM
  disconnectedCallback() {
    console.log("disconnected");
  }

  updateChecked(value) {
    this.checkbox.checked = value != null && value != "false";
  }

  createTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
            <style>
                :host {
                    display: block;
                    margin: 10px;
                }
                label {
                    display: flex;
                    align-items: center;
                }
                input[type="checkbox"] {
                    margin-right: 10px;
                }
                h1 {
                    color: green;
                    margin: 0;
                    font-size: 1rem;
                }
                .description {
                    color: grey;
                    font-size: 0.8rem;
                    margin-left: 1rem;
                }
            </style>
            <label>
                <input type="checkbox">
                <h1><slot></slot></h1>
                <h2 class="description">
                    <slot name="description"></slot>
                </h2>
            </label>
        `;
    return template;
  }
}

customElements.define("todo-item", ToDoItem);

// const item = document.querySelector("todo-item");
// // toggle checked every 0.5sec
// let checked = true;
// setInterval(() => {
//   console.log("changing interval", Date.now());
//   checked = !checked;
//   item.setAttribute("checked", checked);
// }, 500);
