import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,FlatList,ActivityIndicator, TextInput, ScrollView} from 'react-native';
import React,{useState,useEffect} from "react";
import {Button, Divider, Header} from 'react-native-elements';
import axios from 'axios';
import {Calendar,CalendarList,Agenda} from 'react-native-calendars';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

    // const meals = {
    //   "meal1":{ id: "49993", title: "Creamd Cheese Bana Nut Bread"
    //   },
    //   "meal2":{
    //     "id": "49994",
    //     "title": "Leftover Rice Casserole"
    //   },
    //   "meal3":{
    //     "id": "49995",
    //     "title": "Leek & Cheese Pie"
    //   }
    // }


    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [primary,setPrimary] = useState("");
    const [seconday,setSecondary] = useState("");
    const [third,setThird] = useState("");
    const [fourth,setFourth] = useState("");
    const [diet,setDiet] = useState("vegetarian");
    const [exclude,setExclusions] = ("shellfish");
    const [calories,setCalories] = ("2000")

    // const getDiet = async () => {
      

      // var options = {
      //   method: 'GET',
      //   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
      //   params: {
      //     timeFrame: 'week',
      //     targetCalories: `${calories}`,
      //     diet: `${diet}`,
      //     exclude: 'shellfish, olives'
      //   },
      //   headers: {
      //     'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      //     'x-rapidapi-key': 'c2081033a0mshcbb231a20ea1575p18ec37jsn45973e6bd325'
      //   }
      // };
      
      // axios.request(options).then( (response)=> {
      //   console.log(response.data)

        // setPrimary(data => [...data,{meals: JSON.parse(response.data["items"]["0"]["value"]).title }])
        // setSecondary(data => [...data,{meals: JSON.parse(response.data["items"]["1"]["value"])}])

        // setPrimary(JSON.parse(response.data["items"]["0"]["value"]).title)
        
        // setData(data => [...data,{meals: response.data["meals"]["0"]["title"]}]);
        // setData(data => [...data,{meals: response.data["meals"]["1"]["title"]}]);
        // setData(data => [...data,{meals: response.data["meals"]["2"]["title"]}]);


        // setPrimary(response.data["meals"]["0"]["title"]);
        // setSecondary(response.data["meals"]["1"]["title"]);
        // setThird(response.data["meals"]["2"]["title"]);

        // setData(data => [...data,{meals: response.data["meals"]["1"]["title"]}]);
        // setData(data => [...data,{meals: response.data["meals"]["2"]["title"]}]);
    //   }).catch(function (error) {
    //     console.error(error);
    //   }).then(
    //          setLoading(false),
    //          console.log(data),
    //          console.log(primary)
    //        );
    // }



  useEffect(() => {
  },[]);

  return (
    <NavigationContainer>
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
          <SearchBar
                platform="default"
                containerStyle={{}}
                inputContainerStyle={{}}
                inputStyle={{}}
                leftIconContainerStyle={{}}
                rightIconContainerStyle={{}}
                loadingProps={{}}
                onChangeText={diet => setDiet(diet)}
                onClearText={() => console.log(onClearText())}
                placeholder="Type a diet here..."
                placeholderTextColor="#888"
                cancelButtonTitle="Cancel"
                cancelButtonProps={{}}
                onCancel={() => console.log()}
                value={diet}
          />
          
        <Button onPress={console.log({meals})} title="Change Your Diet" color="#841584"/>        
        {/* <TextInput
          style={styles.input}
          onChangeText ={onChangeText}
          value={text}
          placeholder="please enter a food..."
          /> */}
        {isLoading ? <ActivityIndicator style= {{padding: 23}}/> : (
      <View style ={styles.dietlist}>
        <FlatList
          windowSize={4}
          data={data}
          // keyExtractor={item => item.data.indexOf("food")}
          renderItem={({item}) => <Text>{item.meals}</Text>}
        />
        </View>
      )}  
      {/* <Calendar onDayPress={day =>{ console.log('selected day',day)}}/> */}
          <Agenda 
            items={{
              '2022-01-16': [{primary: `${primary}`, seconday: `${seconday}`,third: `${third}`}],
              '2022-01-17': [{seconday: `${seconday}`, height: 80}],
              '2022-01-18': [{third: `${third}`, height: 80}],
              '2022-01-19': [{fourth: `${fourth}`, height: 80}]
            }}
        renderItem={(item) => {
          return <View >
            <Divider
              style={styles.divider}
              color="#2089dc"
              insetType="right"
              subHeader="Morning"
              subHeaderStyle={styles.headerText}
              width={1}
              orientation="horizontal"
            />
            <Text style ={styles.subText}
            >{item.primary}</Text>

            <Divider
              style={styles.divider}
              color="#2089dc"
              insetType="right"
              subHeader="Noon"
              subHeaderStyle={styles.headerText}
              width={1}
              orientation="horizontal"
            />
                <Text  style = {styles.subText} >{item.seconday}</Text>
                <Divider
              style={styles.divider}
              color="#2089dc"
              insetType="right"
              subHeader="Evening"
              subHeaderStyle={styles.headerText}
              width={1}
              orientation="horizontal"
            />
            <View>
              <Text  style ={styles.subText} >{item.third}</Text>
            </View>
                </View>
                ;
            }}

          renderEmptyData={() => {
              return <View>
                  <Text>
                    Add item to your meal plan.
                  </Text>
              </View>;
          }}
          theme={{
            agendaDayTextColor: 'green',
            agendaDayNumColor: 'green',
            agendaTodayColor: 'red',
            agendaKnobColor: 'green'
          }}
        
        />
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: "80%", 
    margin: 1,
    marginTop: 10,

  },
  headerText:{
    marginTop: 5,
    fontSize: 16,
    fontWeight:'bold',
    color: '#4682b4'
  },
  subText:{
    marginTop: 5,
    fontSize: 16,

  },
  container: {
    flex: 1,
    margin: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    padding: 30,
    borderRadius: 11,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  dietlist: {
    flex:1,
    margin: 3,
    maxHeight: 150,
    shadowColor: "#000",
    padding: 10,
    borderRadius: 11,
    borderColor: '#000000',
    borderWidth:2
  }
});
