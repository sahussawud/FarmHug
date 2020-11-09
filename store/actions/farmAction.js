
export const CREATE_STALL = "CREATE_STALL"
export const CREATE_ANIMAL = "CREATE_ANIMAL"
export const CREATE_FARM = "CREATE_FARM"


export const create_farm = (farm) =>{
    return {
        type: CREATE_FARM,
        farm: farm
    }
}

export const create_stall = (stall) =>{
    return {
        type: CREATE_STALL,
        stall: stall
    }
}

export const create_animal = (animal) =>{
    return {
        type: CREATE_ANIMAL,
        animal: animal
    }
}



