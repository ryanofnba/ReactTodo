import expect from 'expect';
import TodoAPI from 'TodoAPI';

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  })

  describe('setTodos', () => {
    beforeEach(() => {
      localStorage.removeItem('todos');
    });

    it('should set valid todos array', () => {
      const todos = [
        {
          id: 23,
          test: 'test',
          completed: false
        }
      ];

      TodoAPI.setTodos(todos);

      const actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set an invalid todos array', () => {
      const todos = {a: 'a'};
      TodoAPI.setTodos(todos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array', () => {
      const actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localstorage', () => {
      const todos = [
        {
          id: 23,
          test: 'test',
          completed: false
        }
      ];

      localStorage.setItem('todos', JSON.stringify(todos));
      const actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    const todos = [
      {
        id: 1,
        text: 'test',
        completed: true
      },
      {
        id: 2,
        text: 'test2',
        completed: false
      },
      {
        id: 3,
        text: 'test3',
        completed: true
      }];

    it('should return all items if showCompleted is true', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return non-completed items if showCompleted is false', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, 'test3');
      expect(filteredTodos.length).toBe(1);
    });

    it('should return all todos if searchText is empty', () => {
      const filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
