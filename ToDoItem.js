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
        <style> h1 { color: green;} </style>
        <h1><slot></slot></h1>
    `;
    return template;
  }
}

customElements.define("todo-item", ToDoItem);
