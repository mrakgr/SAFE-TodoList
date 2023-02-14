import * as react from "react";
import { keyValueList } from "./fable_modules/fable-library.4.0.0-theta-018/MapUtil.js";
import { HTMLAttr, DOMAttr } from "./fable_modules/Fable.React.9.2.0/Fable.React.Props.fs.js";
import { Msg } from "./Types.js";
import { defaultArg } from "./fable_modules/fable-library.4.0.0-theta-018/Option.js";
import { sortBy, map } from "./fable_modules/fable-library.4.0.0-theta-018/List.js";
import { compare } from "./fable_modules/fable-library.4.0.0-theta-018/Date.js";
import { singleton, append, delay, toList } from "./fable_modules/fable-library.4.0.0-theta-018/Seq.js";

export const divider = (() => {
    const props = [["style", {
        marginLeft: 5,
        marginRight: 5,
    }]];
    return react.createElement("span", keyValueList(props, 1));
})();

export function renderTodo(item, dispatch) {
    const toggleText = item.Completed ? "Actually, Not Yet!" : "Complete";
    const dispatchToggle = new DOMAttr(40, [(_arg) => {
        dispatch(new Msg(9, [item.Id]));
    }]);
    const dispatchDelete = new DOMAttr(40, [(_arg_1) => {
        dispatch(new Msg(7, [item.Id]));
    }]);
    const todoStyle = item.Completed ? ["style", {
        color: "red",
        fontSize: 19,
        padding: 5,
        textDecoration: "line-through",
    }] : ["style", {
        color: "green",
        fontSize: 19,
        padding: 5,
    }];
    const children_6 = [react.createElement("p", keyValueList([todoStyle], 1), item.Description), react.createElement("button", keyValueList([new HTMLAttr(64, ["button is-info"]), dispatchToggle], 1), toggleText), divider, react.createElement("button", keyValueList([new HTMLAttr(64, ["button is-danger"]), dispatchDelete], 1), "Delete")];
    return react.createElement("div", {}, ...children_6);
}

export function addTodo(state, dispatch) {
    let children, children_4;
    const textValue = defaultArg(state.NewTodoDescription, "");
    const props_8 = [new HTMLAttr(64, ["field has-addons"]), ["style", {
        padding: 5,
        width: 400,
    }]];
    const children_6 = [(children = [react.createElement("input", {
        className: "input is-large",
        placeholder: "Add Todo",
        defaultValue: textValue,
        value: textValue,
        onChange: (ev) => {
            dispatch(new Msg(3, [ev.target.value]));
        },
    })], react.createElement("div", {
        className: "control is-large",
    }, ...children)), (children_4 = [react.createElement("button", {
        className: "button is-primary is-large",
        onClick: (_arg) => {
            dispatch(new Msg(4, []));
        },
    }, "Add Todo")], react.createElement("div", {
        className: "control is-large",
    }, ...children_4))];
    return react.createElement("div", keyValueList(props_8, 1), ...children_6);
}

export function render(state, dispatch) {
    const sortedTodos = map((todo_1) => renderTodo(todo_1, dispatch), sortBy((todo) => todo.DateAdded, state.TodoItems, {
        Compare: compare,
    }));
    const props_4 = [["style", {
        padding: 20,
    }]];
    const children_2 = toList(delay(() => {
        let props;
        return append(singleton((props = [["style", {
            fontSize: 24,
        }]], react.createElement("h1", keyValueList(props, 1), "SAFE Todo-List"))), delay(() => append(singleton(react.createElement("hr", {})), delay(() => append(singleton(addTodo(state, dispatch)), delay(() => sortedTodos))))));
    }));
    return react.createElement("div", keyValueList(props_4, 1), ...children_2);
}

//# sourceMappingURL=View.js.map
