import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from "react";
import { Button, Divider, Header } from 'react-native-elements';
import axios from 'axios';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { useSelector } from 'react-redux';


function HomeScreen() {
    const userDiet = useSelector(state => state.userDiet)
    const meals = useSelector(state => state.meals)
    const userDietDays = useSelector(state => state.userDietDays)
    const [currentDate, setCurrentDate] = useState("");
    const [items, setItems] = useState({});

 const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };


    const loadItems = (day) => {
        console.log("Home screen meals:", meals.map(item => item.meals))
        const preps = meals.map(item => item.meals)

        setTimeout(() => {
            for (let i = -15; i < 10; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);

                if (!items[strTime]) {
                    items[strTime] = [];

                    const numItems = Math.floor(Math.random() * 3 + 1);

                    for (let j = 0; j < 3; j++) {
                        //add nested loop for meal plan possible randomly genrated... or high carb low card days 
                        items[strTime].push({
                            name: strTime + preps[0] + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                            day: strTime
                        });
                    }
                }
            }
            const newItems = {};
            Object.keys(items).forEach(key => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    }

    const renderItem = (item) => {
        return (<View>
            <Divider
                style={styles.divider}
                color="#2089dc"
                insetType="right"
                subHeader="Morning"
                subHeaderStyle={styles.headerText}
                width={1}
                orientation="horizontal"
            />
            <TouchableOpacity>
            <View style={[styles.card, styles.shadowProp]}>
                <Text style={styles.subText}>
                    {item.name}
                </Text>
            </View>
            </TouchableOpacity>
        </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, padding: 24 }}>
            <Text>{currentDate}</Text>
            <Text style={styles.headerTitleText}>Your {userDiet} Diet </Text>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                renderItem={renderItem}
                renderEmptyData={() => {
                    return (
                    <View style = {[styles.card, styles.shadowProp]}>
                        <Text>
                            Add item to your meal plan.
                        </Text>
                    </View>
                    )
                }}
            />


            <View><Text style={styles.titleText}>You have {userDietDays} Left!</Text></View>

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
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    divider: {
        width: "80%",
        margin: 1,
        marginTop: 10,

    },
    headerTitleText: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 45,
        margin: 15,
        color: '#4682b4'
    },
    titleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 45,
        margin: 15,
        color: '#4682b4'
    },
    headerText: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15,
        color: '#4682b4'
    },
    subText: {
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
})
export default HomeScreen;