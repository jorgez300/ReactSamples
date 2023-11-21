import { Order } from "../../Model/Order";

const initalState = new Order();

type Action = {
    type: string,
    payload: Order
}


export const OrderReducer = (state: Order = initalState, action: Action) => { 

    switch (action.type) { 
        case "@Order/List": {
            return action.payload;
        }
        case "@Order/Clear": { 
            return new Order();
        }
        case "@Order/AddProduct": { 
            return {...state, Products: action.payload.Products};
        }
        case "@Order/RemoveProduct": { 
            return action.payload;
        }
        default: { 
            return state;
        }
    }

}
