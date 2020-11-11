
export const CREATE_STALL = "CREATE_STALL"
export const CREATE_ANIMAL = "CREATE_ANIMAL"
export const UPDATE_ANIMAL = "UPDATE_ANIMAL"
export const CREATE_FARM = "CREATE_FARM"
export const UPDATE_FARM = "UPDATE_FARM"
export const DELETE_ANIMAL = "DELETE_ANIMAL"


export const create_farm = (farm) =>{
    return {
        type: CREATE_FARM,
        farm: farm
    }
}

export const update_farm = (farm, stall, animal) =>{
    return {
        type: UPDATE_FARM,
        farm: farm,
        stall: stall,
        animal: animal
    }
}

export const create_stall = (stall) =>{
    return {
        type: CREATE_STALL,
        stall: stall
    }
}

export const create_animal = (stall, animal) =>{
    return {
        type: CREATE_ANIMAL,
        animal: animal,
        stall: stall
    }
}

export const update_animal = (animal) =>{
    return {
        type: UPDATE_ANIMAL,
        animal: animal
    }
}

export const delete_animal = (animal) =>{
    return {
        type: DELETE_ANIMAL,
        animal: animal
    }
}



