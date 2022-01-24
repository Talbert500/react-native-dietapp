import { SET_USER_DIET } from "./reducer";
import { SET_USER_DIET_DAYS} from "./reducer";
import { SET_START_DATE } from "./reducer";
import { SET_USER_TARGET_CALORIES } from "./reducer";

import { SET_USER_ALLERGIES } from "./reducer";
import { FETCH_DIET_SUCCESS } from "./reducer";


export const fetchDietSuccess = meals => {
    return {
        
        type: FETCH_DIET_SUCCESS,
        payload: meals
    }
}
export const setUserDiet = userDiet => {

    return {
        type: SET_USER_DIET,
        payload: userDiet
    }
}
export const setUserTargetCalories = calories => {
    return {
        type: SET_USER_TARGET_CALORIES,
        payload: calories
    }
}
export const setUserAllergies = allergies => {
    return {
        type: SET_USER_ALLERGIES,
        payload: allergies
    }
}
export const setUserDietDays = () => {
    return {
        type: SET_USER_DIET_DAYS,
        payload:"test"
    }
}
export const setStartDate = () => {
    return {
        type: SET_START_DATE,
        payload:"test"
    }
}
