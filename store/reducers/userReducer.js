// import User from '../../models/user';
import { USER } from '../../data/data-dummy'
import { PROFILE_UPDATE } from '../actions/userAction'

const initialUser = USER


const initialState = {
    profile: initialUser,
    authentication: {
        isLoading: true,
        isSignout: false,
        userToken: null,
    }

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_UPDATE:
            // return state;
            return {
                ...state,
                profile: action.profile
            }
        case 'RESTORE_TOKEN':
            return {
                ...state,
                authentication:{
                    ...state.authentication,
                    userToken: action.token,
                    isLoading: false,
                }
                
            };
        case 'SIGN_IN':
            return {
                ...state,
                authentication:{
                    ...state.authentication,
                    isSignout: false,
                    userToken: action.token,
                }
               
            };
        case 'SIGN_OUT':
            return {
                ...state,
                authentication:{
                    ...state.authentication,
                    isSignout: true,
                    userToken: null,
                }
            };
        default: 
            return state;
    }
}

export default userReducer;
