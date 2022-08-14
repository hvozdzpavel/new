// Arrow function, direct lookup
import {UserStateInterface} from "./userReducer";

const selectEntities = (state: UserStateInterface) => state.user;

// Function declaration, mapping over an array to derive values
export function selectItemIds(state: UserStateInterface) {
    return state.userList;
}
