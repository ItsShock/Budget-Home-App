import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                
            }
        default:
            return state;
    }
}

const initialState = {
    budget: 2000,
    expenses: [
        { id: 13, name: "Shopping", cost: 40 },
        { id: 14, name: "Holiday", cost: 40 },
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {props.children}
    </AppContext.Provider>)
}