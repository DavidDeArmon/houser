//ACTION TYPES
const UPDATE_ONE = "UPDATE_ONE",
 UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL",
 UPDATE_THREE = "UPDATE_THREE",
 RESET_STATE = "RESET_STATE";
//INITIAL STATE
const initialState = {
    name:'',
    address:'',
    city:'',
    state:'',
    zip:0,
    image_url:'',
    mortgage:0,
    rent:0
}
//ACTION CREATOR

export function updateOne(name,address,city,state,zip){
    return{type:UPDATE_ONE, payload:{name,address,city,state,zip}}
}
export function updateImageURL(image_url){
    return{type:UPDATE_IMAGE_URL, payload:image_url}
}
export function updateThree(mortgage,rent){
    return{type:UPDATE_THREE, payload:{mortgage,rent}}
}
export function resetState(){
    return{type:RESET_STATE, payload:initialState}
}

//REDUCER

export default function reducer(state=initialState,action){
    console.log('reducer hit: ',action)
    switch(action.type){
        case UPDATE_ONE:
            return Object.assign(
                ...state,
                {name:action.payload.name,
                address:action.payload.address,
                city:action.payload.city,
                state:action.payload.state,
                zip:action.payload.zip})
        case UPDATE_IMAGE_URL:
            return Object.assign(...state,{image_url:action.payload})
        case UPDATE_THREE:
            return Object.assign(
                ...state,
                {mortgage:action.payload.mortgage,
                rent:action.payload.rent,
               })
        case RESET_STATE:
                return Object.assign(action.payload)
        default: return state;
    }

}