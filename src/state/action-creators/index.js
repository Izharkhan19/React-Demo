export const handleApiResponce = (responce) => {
    return (dispatch) => {
        dispatch({
            type : "responce",
            payload : responce
        })
    } 
}

export const handleSearchValue = (search) => {
    return (dispatch) => {
        dispatch({
            type : "search",
            payload : search
        })
    } 
}