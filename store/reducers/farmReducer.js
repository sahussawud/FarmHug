
import Farm from '../../models/farms'
import { CREATE_FARM, CREATE_STALL, CREATE_ANIMAL, UPDATE_FARM, DELETE_ANIMAL, UPDATE_ANIMAL } from '../actions/farmAction'
import { FARMS, ANIMALS, STALLS} from '../../data/data-dummy'

const initialFarm = new Farm()

const initialState = {
    farm: FARMS[0], // initialFarm
    stall: STALLS, //[]
    animal: ANIMALS //[]
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
        
        case CREATE_ANIMAL:
            const updatestall = {...action.stall, currentAnimal: action.stall.currentAnimal+1}
            const indexStall = state.stall.findIndex(s=> s.id === updatestall.id)
            const stalls = state.stall.splice(indexStall,1,updatestall)
            const updateAnimal = [...state.animal,action.animal]
            return {
                ...state,
                stall: stalls,
                animal: updateAnimal
            }

        case UPDATE_FARM:
            return {
                ...state,
                farm: action.farm,
                stall: action.stall,
                animal: action.animal
            }

        case DELETE_ANIMAL:
            const Stall = state.stall.find(stall=> stall.id === action.animal.stall_id)
            const updatestalls = {...Stall, currentAnimal: Stall.currentAnimal-1}
            const Stalls = state.stall.splice(Stall,1, updatestalls)
            const animal = state.animal.filter(an=> an.id !== action.animal.id)

            return {
                ...state,
                stall: Stalls,
                animal: animal
            }

        case UPDATE_ANIMAL:
            // const animalIndex = state.animal.findIndex(an=> an.id === action.animal.id)
            // const updateAnimals = state.animal.filter(an=> an.id === action.animal.id)
            // updateAnimals.splice(animalIndex, 0, action.animal)
            // console.log('farmReducer ', action.animal, updateAnimals, animalIndex);
            const updateAnimals = []
            for (let index = 0; index < state.animal.length; index++) {
                if(state.animal[index].id === action.animal.id){
                    updateAnimals.push(action.animal)
                }else{
                    updateAnimals.push(state.animal[index])
                }
            }
            return {
                ...state,
                animal: updateAnimals
            }

        default: 
            return state;
    }
}

export default farmReducer;
