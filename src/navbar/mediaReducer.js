import { SET_MOBILE }
  from './mediaActions';

const defaultState = {
  mobile: false
};

const MobileReducer = (state = defaultState, action) => {
    let newState;
    switch (action.type) {
        case SET_MOBILE:
            newState = Object.assign({}, state);
            newState.mobile = action.mobile
            return newState;
        default:
        return state;
    }
};

export default MobileReducer;