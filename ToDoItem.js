class ToDoItem extends HTMLElement {
  constructor() {
    super();

    this.template = this.createTemplate();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.template.content.cloneNode(true));
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
