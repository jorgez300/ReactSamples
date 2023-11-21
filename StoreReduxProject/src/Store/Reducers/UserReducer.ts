import { User } from "../../Model/User";

const initalState = new User();

type Action = {
    type: string,
    payload: User
}

export const UserReducer = (state: User = initalState, action: Action) => { 

    switch (action.type) { 
        case "@User/Login": {
            return action.payload;
        }
        case "@User/Logout": { 
            return action.payload;
        }
        default: { 
            return state;
        }
    }

}

