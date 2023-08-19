const { LitElement, html, css } = window;

export class ToDoList extends LitElement {
  static properties = {
    _listItems: { state: true },
    hideCompleted: {},
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
    this.hideCompleted = false;
  }

  setHideCompleted(e) {
    this.hideCompleted = e.target.checked;
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
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;

    const caughtUpMessage = html`<p>You're all caught up!</p>`;
    const toDos = html` <ul>
      ${items.map(
        (item) =>
          html`<li
            class=${item.completed ? "completed" : ""}
            @click=${() => this.toggleCompleted(item)}
          >
            ${item.text}
          </li>`
      )}
    </ul>`;
    const toDosOrMessage = items.length > 0 ? toDos : caughtUpMessage;

    return html`
      <h2>To Do</h2>
      ${toDosOrMessage}
      <input id="newitem" aria-label="New item" />
      <button @click=${this.addToDo}>Add</button>
      <label>
        <input
          type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}
        />
        Hide completed
      </label>
    `;
  }
}

customElements.define("todo-list", ToDoList);
