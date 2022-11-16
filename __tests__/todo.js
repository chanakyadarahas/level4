/* eslint-disable no-undef */

const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
let today = new Date().toISOString().split("T")[0];
// eslint-disable-next-line no-undef
describe("Todo Test suite", () => {
  // eslint-disable-next-line no-undef
  beforeAll(() => {
    add({
      title: "Testing todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  // eslint-disable-next-line no-undef
  test("Add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "Testing todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    // eslint-disable-next-line no-undef
    expect(all.length).toBe(todoItemCount + 1);
  });
  // eslint-disable-next-line no-undef
  test("should mark a todo as completed", () => {
    // eslint-disable-next-line no-undef
    expect(all[0].completed).toBe(false);
    markAsComplete(0);

    expect(all[0].completed).toBe(true);
  });
  test("todos they are overdue", () => {
    let overdue = overdue();

    expect(
      overdue.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);});
test("todo that are duetoday", () => {
        let duetoday = dueToday();
    
        expect(
          duetoday.every((todo) => {
            return todo.dueDate == today;
          })
        ).toBe(true);

  });
  test("todos are duelater", () => {
    let duelater = dueLater();

    expect(
      duelater.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);

});
});
