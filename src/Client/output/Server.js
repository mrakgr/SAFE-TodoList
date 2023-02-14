import { Remoting_buildProxy_64DC51C } from "./fable_modules/Fable.Remoting.Client.7.25.0/Remoting.fs.js";
import { RemotingModule_createApi, RemotingModule_withRouteBuilder } from "./fable_modules/Fable.Remoting.Client.7.25.0/Remoting.fs.js";
import { Description, TodoError, ITodoProtocol$reflection, Route_builder } from "./Shared/Shared.js";
import { Cmd_OfAsync_start, Cmd_OfAsyncWith_either } from "./fable_modules/Fable.Elmish.4.0.1/cmd.fs.js";
import { Msg } from "./Types.js";

export const api = Remoting_buildProxy_64DC51C(RemotingModule_withRouteBuilder(Route_builder, RemotingModule_createApi()), ITodoProtocol$reflection());

export function loadAllTodos() {
    return Cmd_OfAsyncWith_either((x) => {
        Cmd_OfAsync_start(x);
    }, api.allTodos, void 0, (arg) => (new Msg(1, [arg])), (arg_1) => (new Msg(2, [arg_1])));
}

export function deleteTodo(id) {
    const successCallback = (_arg) => {
        if (_arg.tag === 1) {
            const error = _arg.fields[0];
            return new Msg(8, [error]);
        }
        else {
            return new Msg(0, []);
        }
    };
    const errorCallback = (_arg_1) => (new Msg(8, [new TodoError(3, [])]));
    return Cmd_OfAsyncWith_either((x) => {
        Cmd_OfAsync_start(x);
    }, api.deleteTodo, id, successCallback, errorCallback);
}

export function addTodo(text) {
    return Cmd_OfAsyncWith_either((x) => {
        Cmd_OfAsync_start(x);
    }, api.addTodo, new Description(0, [text]), (_arg) => {
        if (_arg == null) {
            return new Msg(5, []);
        }
        else {
            const addedTodo = _arg;
            return new Msg(6, [addedTodo]);
        }
    }, (ex) => (new Msg(5, [])));
}

export function toggleCompleted(id) {
    return Cmd_OfAsyncWith_either((x) => {
        Cmd_OfAsync_start(x);
    }, api.toggleCompleted, id, (_arg) => {
        if (_arg.tag === 1) {
            const error = _arg.fields[0];
            return new Msg(10, [error]);
        }
        else {
            return new Msg(0, []);
        }
    }, (_arg_1) => (new Msg(10, [new TodoError(2, [])])));
}

//# sourceMappingURL=Server.js.map
