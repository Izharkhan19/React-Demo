const searchReducer = (state='', action) => {
        if( action.type === "search" ) {
            return state = action.payload
        }
        return state ; 
}

export default searchReducer ;