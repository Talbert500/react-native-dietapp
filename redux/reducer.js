export const SET_USER_DIET = 'SET_USER_DIET';
export const SET_USER_TARGET_CALORIES = 'SET_USER_TARGET_CALORIES';
export const SET_USER_DIET_DAYS = 'SET_USER_DIET_DAYS';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_USER_ALLERGIES = 'SET_USER_ALLERGIES'

//async actions
export const FETCH_DIET_SUCCESS = 'FETCH_DIET_SUCCCESS'


import {createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {

    userDiet: '',
    userDietDays: 0,
    meals: [],
    calories: 0,
    allergies: '',
}

export const fetchMeals = createAsyncThunk()

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_ALLERGIES:
            return {
                ...state,
                allergies: action.payload
            }
        case FETCH_DIET_SUCCESS:
            console.log("Meals added"+ JSON.stringify(state.meals))
            return {
                ...state,
                meals: action.payload,
            }
        case SET_USER_DIET:
            return {
                ...state,
                userDiet: action.payload
            }
        case SET_USER_DIET_DAYS:
            return {
                ...state,
                userDietDays: action.payload
            }
        case SET_USER_TARGET_CALORIES:
            return {
                ...state,
                calories: action.payload
            }
        case SET_START_DATE:
            return {
            }


        default: return state

    }

}

export default (reducer)