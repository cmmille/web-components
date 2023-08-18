const { LitElement, html, css } = window;

export class ToDoList extends LitElement {
  static properties = {
    _listItems: { state: true },
  };

  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

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

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  render() {
    return html`
      <h2>To Do</h2>
      <ul>
        ${this._listItems.map(
          (item) =>
            html`<li
              class=${item.completed ? "completed" : ""}
              @click=${() => this.toggleCompleted(item)}
            >
              ${item.text}
            </li>`
        )}
      </ul>
      <input id="newitem" aria-label="New item" />
      <button @click=${this.addToDo}>Add</button>
    `;
  }
}

customElements.define("todo-list", ToDoList);
