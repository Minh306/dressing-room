let initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case "SELECT_PRODUCT":{
            // literal object
            state = {...state,[action.payload.type]:action.payload.img}
            console.log(state);
            return state;
        }
        default:
        return state
    }
}
export default reducer;