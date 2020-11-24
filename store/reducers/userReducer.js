import User from '../../models/user';
// import { USER } from '../../data/data-dummy'
import { PROFILE_UPDATE, SIGN_IN, SIGN_OUT, RESTORE_TOKEN, PROFILE_SETUP } from '../actions/userAction'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAlert} from '../../data/fetching'

const initialUser = new User()


const initialState = {
    profile: initialUser,
    authentication: {
        isProfile: false,
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
        case RESTORE_TOKEN:
            return {
                ...state,
                authentication:{
                    ...state.authentication,
                    userToken: action.token,
                    isLoading: false,
                }
                
            };
        case SIGN_IN:
            AsyncStorage.setItem('token',action.token).catch(err=>{
                createAlert('เกิดปัญหาในการเข้าสู่ระบบ', "")
            })
            return {
                ...state,
                authentication:{
                    ...state.authentication,
                    isSignout: false,
                    userToken: action.token,
                }
               
            };
        case SIGN_OUT:
            AsyncStorage.setItem('token', '')
            return {
                state: initialState 
            };
        case PROFILE_SETUP:
            return {
                ...state,
                profile:{
                    ...state.profile,
                    isProfile: true
                }
            };
        default: 
            return state;
    }
}

export default userReducer;
