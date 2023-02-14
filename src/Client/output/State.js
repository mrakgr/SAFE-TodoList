import { append, singleton, empty } from "./fable_modules/fable-library.4.0.0-theta-018/List.js";
import { Msg, State, Visibility } from "./Types.js";
import { Cmd_none } from "./fable_modules/Fable.Elmish.4.0.1/cmd.fs.js";
import { deleteTodo, toggleCompleted, addTodo, loadAllTodos } from "./Server.js";

export function initialState() {
    const initState = new State(empty(), void 0, new Visibility(0, []));
    return [initState, singleton((dispatch) => {
        dispatch(new Msg(0, []));
    })];
}

export function update(msg, prevState) {
    switch (msg.tag) {
        case 3: {
            const text = msg.fields[0];
            const nextState = new State(prevState.TodoItems, text, prevState.Visibility);
            return [nextState, Cmd_none()];
        }
        case 0: {
            return [prevState, loadAllTodos()];
        }
        case 4: {
            const matchValue = prevState.NewTodoDescription;
            if (matchValue != null) {
                const text_1 = matchValue;
                return [prevState, addTodo(text_1)];
            }
            else {
                return [prevState, Cmd_none()];
            }
        }
        case 6: {
            const todoItem = msg.fields[0];
            const nextTodoItems = append(prevState.TodoItems, singleton(todoItem));
            const nextState_1 = new State(nextTodoItems, void 0, prevState.Visibility);
            return [nextState_1, Cmd_none()];
        }
        case 1: {
            const items = msg.fields[0];
            const nextState_2 = new State(items, prevState.NewTodoDescription, prevState.Visibility);
            return [nextState_2, Cmd_none()];
        }
        case 9: {
            const id = msg.fields[0] | 0;
            return [prevState, toggleCompleted(id)];
        }
        case 7: {
            const id_1 = msg.fields[0] | 0;
            return [prevState, deleteTodo(id_1)];
        }
        default: {
            return [prevState, Cmd_none()];
        }
    }
}

//# sourceMappingURL=State.js.map
