import User from '../../models/user';
import { PROFILE_UPDATE } from '../actions/userAction'

const initialUser = new User()


const initialState = {
    profile: initialUser,

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_UPDATE:
            // return state;
            return {
                ...state,
                profile: action.profile
            }
        default: 
            return state;
    }
}

export default userReducer;
