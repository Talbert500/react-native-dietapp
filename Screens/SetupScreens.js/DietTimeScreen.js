import React,{useState} from 'react'; 
import {View, Text,TouchableOpacity, FlatList, StyleSheet,SafeAreaView,TextInput} from 'react-native';
import {Button, ListItem } from 'react-native-elements';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { useSelector, useDispatch } from 'react-redux';
import {setUserAllergies, setUserTargetCalories} from '../../redux/action'



function DietTimeScreen({navigation}){
    const userDiet = useSelector(state => state.userDiet)
    const calories = useSelector(state=> state.calories)
    const [calor,setCalor] = useState("2000")
    const [aller,setAller] = useState("")
    const dispatch = useDispatch();

    function setCalories () {
        dispatch(setUserTargetCalories(calor))
    }
    function setAllergies () {
        dispatch(setUserAllergies(aller))
    }

    return (
        <View style={styles.container}>
            <Text style= {styles.header}>Add More Information</Text>
            <Text style= {styles.categories}>How many calories would you like each meal?</Text>
            <TextInput           
                style={styles.input}
                onEndEditing={setCalories}
                onChangeText={setCalor}
                value={calor}
                placeholder= "Recommended daily calorie intake is 2,000..."
                keyboardType = 'number-pad'
            />
            <Text style= {styles.categories}> Do you have any allergies?</Text>
            <TextInput           
                style={styles.input}
                onEndEditing={setAllergies}
                onChangeText={setAller}
                value={aller}
                placeholder= "Sperate allergies with commas"
            />

            <Button buttonStyle ={styles.button} title ="Next" onPress={()=> navigation.navigate('Confirm')}></Button>
        </View>

   );
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding :15,
        margin: 10,
        borderRadius :10,
    },
    categories: {
        textAlign:'left',
        fontSize: 30,
        margin: 10,
        marginTop: 10

    },
    header: {
        textAlign:'left',
        fontWeight: 'bold',
        fontSize: 45,
        margin:15

    },
    container: {
        flex:1,
        backgroundColor: "white"
    },
    list: {
        margin:20,
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

export default DietTimeScreen;