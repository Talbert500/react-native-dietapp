import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {fetchDietSuccess} from '../redux/action'



const getMeals = ({props}) => {

    const dispatch = useDispatch();
    //  const userDiet = useSelector(state => state.userDiet)
    const userDiet = "vegan"

    const options = {
        method: 'GET',
        url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
        params: {
          timeFrame: 'day',
          targetCalories: '2000',
          diet: `${userDiet}`,
          exclude: 'shellfish, olives'
        },
        headers: {
          'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'x-rapidapi-key': 'c2081033a0mshcbb231a20ea1575p18ec37jsn45973e6bd325'
        }
      };
      
      axios.request(options).then(function (response) {
        data = (response.data["meals"]["0"]["title"])
        console.log(data);

      }).catch(function (error) {
          console.error(error);
      });

    }

export default getMeals;
