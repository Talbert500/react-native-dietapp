import React, { useEffect, useState } from 'react';
import { TextInput,View, Text, Image,TouchableOpacity, FlatList, StyleSheet, SafeAreaView,Linking } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { useSelector , useDispatch} from 'react-redux';
import axios from 'axios';
import {fetchDietSuccess} from '../../redux/action'


function DietConfirmationScreen({ navigation }) {
    const calories = useSelector(state => state.calories)
    const userDiet = useSelector(state => state.userDiet)
    const allergies = useSelector(state=> state.allergies)
    const meals = useSelector
    const [data, setData] = useState([])
    const imageURL = "https://webknox.com/recipeImages/"

    const dispatch = useDispatch();


    function setMeals (){
        dispatch(fetchDietSuccess([data]))
        console.log("Your meals are" , data)
    }

    const getData = () => {
        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
            params: {
                timeFrame: 'day',
                targetCalories: `${calories}`,
                diet: `${userDiet}`,
                exclude: `${allergies}`
            },
            headers: {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': 'c2081033a0mshcbb231a20ea1575p18ec37jsn45973e6bd325'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data)
            setData(data => [...data, { meals: response.data["meals"]["0"]["title"] ,image_url: response.data["meals"]["0"]["sourceUrl"] }])
            setData(data => [...data, { meals: response.data["meals"]["1"]["title"] ,image_url: response.data["meals"]["1"]["sourceUrl"] }])
            setData(data => [...data, { meals: response.data["meals"]["2"]["title"] ,image_url: response.data["meals"]["2"]["sourceUrl"] }])
            setMeals();
        }).catch(function (error) {
            console.error(error);
        }).then(function () {
            console.log(data);
           
        })

    }
    useEffect(()=>{
        getData()

    },[])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Do You Like These {userDiet} Meals?</Text>
            {/* <Button buttonStyle={styles.button} title="Get Meals" onPress={getData}></Button> */}
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={[styles.card,styles.shadowProp]}>
                        <Text style={styles.categories}>{item.meals}</Text>
                        <Button title="Learn More" onPress={()=>{Linking.openURL(`${item.image_url}`)}}/>
                    </View>

                )}
            />
            <Button buttonStyle ={styles.button} title="Yes!" onPress={() => navigation.navigate('Home')}></Button>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 25,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 5,

    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    categories: {
        textAlign: 'left',
        fontSize: 25,
        margin: 10,
        marginTop: 10

    },
    header: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 40,
        margin: 15

    },
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    list: {
        margin: 20,
        borderTopWidth: 1,
        borderColor: "grey",
    },
    options: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,

    },
    button: {
        backgroundColor: "#f6ae2d",
        padding: 24,
        margin: 13,
        borderRadius: 12,
        shadowColor: '#171717',
        shadowOffset: {width: -1, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 2,
    }
})

export default DietConfirmationScreen;