// import User from '../../models/user';
import {USER} from '../../data/data-dummy'
import { PROFILE_UPDATE } from '../actions/userAction'

const initialUser = USER


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
