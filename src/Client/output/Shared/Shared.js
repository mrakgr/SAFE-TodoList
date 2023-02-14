import { printf, toText } from "../fable_modules/fable-library.4.0.0-theta-018/String.js";
import { Union, Record } from "../fable_modules/fable-library.4.0.0-theta-018/Types.js";
import { option_type, lambda_type, list_type, unit_type, union_type, record_type, class_type, bool_type, string_type, int32_type } from "../fable_modules/fable-library.4.0.0-theta-018/Reflection.js";
import { now } from "../fable_modules/fable-library.4.0.0-theta-018/Date.js";

export function Route_builder(typeName, methodName) {
    return toText(printf("/api/%s/%s"))(typeName)(methodName);
}

export class Todo extends Record {
    constructor(Id, Description, Completed, DateAdded) {
        super();
        this.Id = (Id | 0);
        this.Description = Description;
        this.Completed = Completed;
        this.DateAdded = DateAdded;
    }
}

export function Todo$reflection() {
    return record_type("Shared.Todo", [], Todo, () => [["Id", int32_type], ["Description", string_type], ["Completed", bool_type], ["DateAdded", class_type("System.DateTime")]]);
}

export function defaultTodo() {
    return new Todo(0, "", false, now());
}

export class TodoError extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["TodoDoesNotExist", "InsertNotSuccessful", "UpdateNotSuccesful", "DeleteNotSuccesful"];
    }
}

export function TodoError$reflection() {
    return union_type("Shared.TodoError", [], TodoError, () => [[], [], [], []]);
}

export class DeleteResult extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Deleted", "DeleteError"];
    }
}

export function DeleteResult$reflection() {
    return union_type("Shared.DeleteResult", [], DeleteResult, () => [[], [["Item", TodoError$reflection()]]]);
}

export class UpdateResult extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Updated", "UpdateError"];
    }
}

export function UpdateResult$reflection() {
    return union_type("Shared.UpdateResult", [], UpdateResult, () => [[], [["Item", TodoError$reflection()]]]);
}

export class Description extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Description"];
    }
}

export function Description$reflection() {
    return union_type("Shared.Description", [], Description, () => [[["Item", string_type]]]);
}

export class ITodoProtocol extends Record {
    constructor(allTodos, addTodo, toggleCompleted, deleteTodo) {
        super();
        this.allTodos = allTodos;
        this.addTodo = addTodo;
        this.toggleCompleted = toggleCompleted;
        this.deleteTodo = deleteTodo;
    }
}

export function ITodoProtocol$reflection() {
    return record_type("Shared.ITodoProtocol", [], ITodoProtocol, () => [["allTodos", lambda_type(unit_type, class_type("Microsoft.FSharp.Control.FSharpAsync`1", [list_type(Todo$reflection())]))], ["addTodo", lambda_type(Description$reflection(), class_type("Microsoft.FSharp.Control.FSharpAsync`1", [option_type(Todo$reflection())]))], ["toggleCompleted", lambda_type(int32_type, class_type("Microsoft.FSharp.Control.FSharpAsync`1", [UpdateResult$reflection()]))], ["deleteTodo", lambda_type(int32_type, class_type("Microsoft.FSharp.Control.FSharpAsync`1", [DeleteResult$reflection()]))]]);
}

//# sourceMappingURL=Shared.js.map
