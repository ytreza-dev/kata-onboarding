
class TodoList {
    constructor() {
        this.todos = [];
    }

    add(item) {
        this.todos.push(item);
    }
}

describe('todo list', () => {
    it('should add a todo', () => {
        const todo = new TodoList();

        todo.add({name: "buy milk"});

        expect(todo.todos.length).toBe(1);
        expect(todo.todos[0].name).toBe("buy milk");
    });
});
