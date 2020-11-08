import User from '../../models/user';
import Farm from '../../models/farms'
import { PROFILE_UPDATE } from '../actions/userAction'

const initialUser = new User()
const initialFarm = new Farm()

const initialState = {
    profile: initialUser,
    farm: initialFarm,
    stall: [],
    animal: []
}

const farmHugReducer = (state = initialState, action) => {
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

export default farmHugReducer;
