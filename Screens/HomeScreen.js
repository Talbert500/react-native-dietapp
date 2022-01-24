import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";
import { Button, Divider, Header } from 'react-native-elements';
import axios from 'axios';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { useSelector } from 'react-redux';


function HomeScreen() {
    const userDiet = useSelector(state => state.userDiet)
    const meals = useSelector(state=> state.meals)

    console.log("Home screen meals:", meals)

    return (
        <SafeAreaView style={{ flex: 1, padding: 24 }}>
        <Text style = {styles.headerTitleText}>Your {userDiet} Diet </Text>       
            <Agenda
                items={{
                    '2022-01-16': [{ primary: ``, seconday: `test`, third: `test` }],
                    '2022-01-17': [{ seconday: `test`, height: 80 }],
                    '2022-01-18': [{ third: `test`, height: 80 }],
                    '2022-01-19': [{ fourth: `test`, height: 80 }]
                }}
                renderItem={(item) => {
                    return <View>
                        <Divider
                            style={styles.divider}
                            color="#2089dc"
                            insetType="right"
                            subHeader="Morning"
                            subHeaderStyle={styles.headerText}
                            width={1}
                            orientation="horizontal"
                        />
                        <View style = {[styles.card, styles.shadowProp]}>
                            <Text style = {styles.subText}>
                                {item.primary}
                            </Text>

                        </View>
                    </View>
                }}
                renderEmptyData={() => {
                    return (
                    <View style = {[styles.card, styles.shadowProp]}>
                        <Text>
                            Add item to your meal plan.
                        </Text>
                    </View>
                    )
                }}
                theme={{
                    agendaDayTextColor: 'green',
                    agendaDayNumColor: 'green',
                    agendaTodayColor: 'red',
                    agendaKnobColor: 'green'
                }}


            />
            <Text>Home Screen</Text>
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
    divider: {
        width: "80%",
        margin: 1,
        marginTop: 10,

    },
    headerTitleText: {
        textAlign:'left',
        fontWeight: 'bold',
        fontSize: 45,
        margin:15,
        color: '#4682b4'
    },
    headerText: {
        textAlign:'left',
        fontWeight: 'bold',
        fontSize: 20,
        margin:15,
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