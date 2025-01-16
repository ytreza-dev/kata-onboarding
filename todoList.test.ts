// Quand on ajoute une tâche, la première lettre de la tâche doit être mis en majuscule et doit se finir par un point.

// add buy the milk -> Buy the milk.
// add Buy the water -> Buy the water.

class RepositoryForTest {
    constructor() {
        this.tasks = [];
    }

    push(task) {
        this.tasks.push(task);
    }
}

class AddTaskUseCase {
    constructor(repository) {
        this.repository = repository;
    }

    execute(task) {
        let taskWithUpperCaseFirstLetter = this.formatTask(task);
        this.repository.push({name: taskWithUpperCaseFirstLetter});
    }

    formatTask(task) {
        let taskWithUpperCaseFirstLetter = task.charAt(0).toUpperCase() + task.slice(1);
        if (taskWithUpperCaseFirstLetter.charAt(taskWithUpperCaseFirstLetter.length - 1) !== ".") {
            taskWithUpperCaseFirstLetter += ".";
        }
        return taskWithUpperCaseFirstLetter;
    }
}

describe('todo list', () => {
    it('should add a task', () => {
        const repository = new RepositoryForTest();

        const useCase = new AddTaskUseCase(repository);
        useCase.execute("Buy the egg.");

        expect(repository.tasks).toEqual([{name: "Buy the egg."}])
    });

    it('should task have a upper case first letter', () => {
        const repository = new RepositoryForTest();

        const useCase = new AddTaskUseCase(repository);
        useCase.execute("buy the egg.");

        expect(repository.tasks).toEqual([{name: "Buy the egg."}])
    });

    it('should task have a point at the end', () => {
        const repository = new RepositoryForTest();

        const useCase = new AddTaskUseCase(repository);
        useCase.execute("Buy the egg");

        expect(repository.tasks).toEqual([{name: "Buy the egg."}])
    });

});
