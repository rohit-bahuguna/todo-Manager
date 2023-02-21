const initialState = {
    name: '',
    totalTasks: '',
    eamil: '',
    loginStatus: false
}

export const reducer = (state = initialState, action) => {

    const { type, payload } = action;
    console.log(action);
    switch (type) {
        case "SET_USER_DATA":
            return { ...state, user: { name: payload.user.name, eamil: payload.user.email, totalTasks: payload.totalTasks } }
            break;
        case "LOG_OUT":
            return { ...state, user: { ...initialState } }
            break;
        case "LOG_IN":
            return {
                user: { name: payload.user.name, eamil: payload.user.email, loginStatus: payload.success }
            }
            break

        default:
            return state;

    }


}  