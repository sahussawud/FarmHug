
import Farm from '../../models/farms'
import { CREATE_FARM, CREATE_STALL, CREATE_ANIMAL } from '../actions/farmAction'

const initialFarm = new Farm()

const initialState = {
    farm: initialFarm,
    stall: [],
    animal: []
}

const farmReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_FARM:
            return {
                ...state,
                farm: action.farm
            }
        case CREATE_STALL:
            return {
                ...state,
                stall: action.stall
            }
        default: 
            return state;
    }
}

export default farmReducer;
