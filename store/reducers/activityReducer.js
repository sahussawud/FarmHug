
import activity from '../../models/activity'
import {CREATE_ACTIVITY, UPDATE_ACTIVITY, DELETE_ACTIVITY} from '../actions/activityAction'


const initialState = {
    activities: [],
}

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ACTIVITY:
            const activities = state.activities;
            activities.push(action.activity)
            return {
                activities: activities
            }
        case UPDATE_ACTIVITY:
            const indexUpdate = state.activities.findIndex(activi=> activi.id === action.activity.id)
            const update_activity = state.activities
            update_activity.splice(indexUpdate, 1, action.activity)
            return {
                activities: update_activity
            }
        
        case DELETE_ACTIVITY:
            const update_activitys = state.activities.filter(activi=> activi.id !== action.activity.id)
            return {
                activities: update_activitys
            }
        
        default: 
            return state;
    }
}

export default activityReducer;
