import React,{useState} from 'react'; 
import {View, TextInput,Text,TouchableOpacity, FlatList, StyleSheet,SafeAreaView} from 'react-native';
import {Button, ListItem } from 'react-native-elements';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useSelector, useDispatch } from 'react-redux';
import {setUserDiet} from '../../redux/action'
import {diets} from '../../rawdata'


const PickDietScreen = ({navigation , props}) => {

    const [selectedId, setSelectedId] = useState(null);
    const[type,setType]= useState("");

     const dispatch = useDispatch();

    // console.log(diets);

    const Item = ({item, onPress , backgroundColor,title}) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <Text style={title}>{item.title}</Text>
            <Divider style={{ marginTop: 20}}/>
        </TouchableOpacity>
    )
    const renderItem = ({item}) =>{ 
        const backgroundColor = item.id === selectedId ? "#fde9c4" :"#ffffff";
        
        return( 
            <Item
            item ={item}
            onPress={()=> (setSelectedId(item.id), dispatch(setUserDiet(item.title)) )}
            backgroundColor={{backgroundColor}}
            title = {styles.categories}
            />
            )
        }

    return (
        <SafeAreaView foreceInset = {{top: 'always'}} style={styles.container}>
            <Text style= {styles.header}>Pick a Diet</Text>
            <View>
            <TextInput
                style={styles.input}
                onChangeText={setType}
                value={type}
                placeholder= "Ketogenic..."
            />
            </View>
            <FlatList
                data={diets}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                extraData={selectedId}
            />
            <Button buttonStyle ={styles.button} title ="Next" onPress={()=> navigation.navigate('Time')}></Button>
        </SafeAreaView>

   );
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.4,
        shadowRadius: 3,
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
    },
    input:{
        height: 70,
        padding: 2,
        backgroundColor: 'lightgrey'  

    }
})


export default PickDietScreen;