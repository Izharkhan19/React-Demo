const responceReducer = (state=[], action) => {
    if(action.type === "responce") {
        return state = action.payload 
    }
    return state;
}

export default responceReducer ;


