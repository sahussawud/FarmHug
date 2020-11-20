export const PROFILE_UPDATE = "PROFILE_UPDATE"
export const RESTORE_TOKEN = "RESTORE_TOKEN"
export const SIGN_IN = "SIGN_IN"
export const SIGN_OUT = "SIGN_OUT"



export const profile_update = (profile) =>{
    return {
        type: PROFILE_UPDATE,
        profile: profile
    }
}

export const restore_token = (token) =>{
    return {
        type: RESTORE_TOKEN,
        token: token
    }
}

export const sign_in = (token) =>{
    return {
        type: SIGN_IN,
        token: token
    }
}

export const sign_out = () =>{
    return {
        type: SIGN_OUT
    }
}




