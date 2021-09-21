import { useReducer } from "react";

function reducer(state,action){
    debugger;
    return {
        ...state,
        [action.name] : action.value
    };
}

export default function useInputs(initialForm) {
    const [state,dispatch] = useReducer(reducer,initialForm);
    const onChange = e => {
        dispatch(e.target);
    };
    return [state,onChange];
}