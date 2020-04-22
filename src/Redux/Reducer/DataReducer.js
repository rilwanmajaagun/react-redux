import ActionType from "../Action/ActionType";

const initial = {

    state:false,
    apidata:[],
    error:{}
    
}

export const DataReducer =(state = initial ,action)=>{
    switch (action.type) {
        case ActionType.GET_DATA_START: 
        return{
            ...state,
            state: true

        };
        case ActionType.GET_DATA_SUCCESS: 
        return{
            ...state,
            apidata: action.payload

        }; 
        case ActionType.GET_DATA_FAILURE: 
        return{
            ...state,
            error: action.payload

        }; 
        default: 
        return state

    }
}

