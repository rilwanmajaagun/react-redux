import ActionType from "./ActionType"

const getDataStart=()=>({
    type: ActionType.GET_DATA_START,
    
})
const getDataSuccess= payload =>({
    type: ActionType.GET_DATA_SUCCESS,
    payload
})
const getDataFailure= payload =>({
    type: ActionType.GET_DATA_FAILURE,
    payload
})
export const fetchData = ()=>{
    const url = "https://jsonplaceholder.typicode.com/posts/1/comments"
    return dispatch => {
        dispatch(getDataStart);
        fetch(url).then(res=> res.json()).then(res => {dispatch(getDataSuccess(res));console.log(res)})
        .catch(err => getDataFailure(err))
    }
}
 