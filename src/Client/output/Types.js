import { Record, Union } from "./fable_modules/fable-library.4.0.0-theta-018/Types.js";
import { int32_type, class_type, record_type, option_type, string_type, list_type, union_type } from "./fable_modules/fable-library.4.0.0-theta-018/Reflection.js";
import { TodoError$reflection, Todo$reflection } from "./Shared/Shared.js";

export class Visibility extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["All", "Completed", "NotCompleted"];
    }
}

export function Visibility$reflection() {
    return union_type("Todo.Types.Visibility", [], Visibility, () => [[], [], []]);
}

export class State extends Record {
    constructor(TodoItems, NewTodoDescription, Visibility) {
        super();
        this.TodoItems = TodoItems;
        this.NewTodoDescription = NewTodoDescription;
        this.Visibility = Visibility;
    }
}

export function State$reflection() {
    return record_type("Todo.Types.State", [], State, () => [["TodoItems", list_type(Todo$reflection())], ["NewTodoDescription", option_type(string_type)], ["Visibility", Visibility$reflection()]]);
}

export class Msg extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["LoadTodoItems", "TodoItemsLoaded", "LoadTodoItemsFailure", "SetNewTextDescription", "AddTodo", "AddTodoFailed", "TodoAdded", "DeleteTodo", "DeleteTodoFailure", "ToggleCompleted", "ToggleCompletedFailure", "SetVisibility"];
    }
}

export function Msg$reflection() {
    return union_type("Todo.Types.Msg", [], Msg, () => [[], [["Item", list_type(Todo$reflection())]], [["Item", class_type("System.Exception")]], [["Item", string_type]], [], [], [["Item", Todo$reflection()]], [["Item", int32_type]], [["Item", TodoError$reflection()]], [["Item", int32_type]], [["Item", TodoError$reflection()]], [["Item", Visibility$reflection()]]]);
}

//# sourceMappingURL=Types.js.map
