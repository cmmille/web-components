const { LitElement, html } = window;

export class ToDoList extends LitElement {
  static properties = {
    _listItems: { state: true },
  };

  constructor() {
    super();
    this._listItems = [
      { text: "Start Lit tutorial", completed: true },
      { text: "Make to-do list", completed: false },
    ];
  }

  get input() {
    return this.renderRoot?.querySelector("#newitem") ?? null;
  }

  addToDo() {
    const newItem = { text: this.input.value, completed: false };
    this._listItems = [...this._listItems, newItem];
    this.input.value = "";
  }

  render() {
    return html`
      <h2>To Do</h2>
      <ul>
        ${this._listItems.map((item) => html`<li>${item.text}</li>`)}
      </ul>
      <input id="newitem" aria-label="New item" />
      <button @click=${this.addToDo}>Add</button>
    `;
  }
}

customElements.define("todo-list", ToDoList);
