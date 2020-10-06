export default (state, action) => {
    switch (action.type) {
        case 'SET_IS_RESUME_OPEN':
            return setIsResumeOpen(action.payload, state)
        default:
            break
    }
}

const setIsResumeOpen = (isResumeOpen, state) => {
    return {
        ...state,
        isResumeOpen
    }
}