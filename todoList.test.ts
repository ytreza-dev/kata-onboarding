class TodoList {
    constructor() {
        this.todos = [];
    }

    add(buyMilk) {
        this.todos.push(buyMilk);
    }
}

describe('todo list', () => {
    it('should add a todo', () => {
        const todo = new TodoList();

        todo.add("buy milk");

        expect(todo.todos.length).toBe(1);
    });
});
