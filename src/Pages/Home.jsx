import { View, Text, SafeAreaView, ImageBackground, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Card, Divider, Icon, TextInput } from 'react-native-paper'
import HomeStyle from '../css/HomeStyle'
import axios from 'axios'
import CardCom from '../Components/CardCom'
// import MyContext from "../MyContext"

const Home = () => {

    const navigation = useNavigation()
    const [recipe, setRecipe] = useState([])
    const [search, setSearch] = useState('pizza')
    const [loading, setLoading] = useState(true)
    // const {gSearch} = useContext(MyContext)

    
    

    const getSearchRecipe = async() => {
        setLoading(true)
        return await axios.get(`https://api.edamam.com/api/recipes/v2?q=${search}&app_id=665b69dd&app_key=8e20d5ab5239cf29f18e5c7e8cafd470&type=public&random=true`).then((response) => {
            setRecipe(response.data.hits)
            setLoading(false)
        }).catch((err) => {
            console.log("err: " ,err);
            setLoading(false)
        })
    }
    

    useEffect(() => {
        getSearchRecipe()
        /* if(gSearch){
            setSearch(gSearch)
        } */
    }, [search])

    // console.log("recipe: ", recipe);
    return (
        <SafeAreaView>
            {/* <ImageBackground source={require('../../assets/images/backgroundImage.jpg')} resizeMode="stretch" style={HomeStyle.backgrouImage}> */}
                <View  style={{marginTop: 20, padding: 10}}>
                    <TextInput mode={"outlined"} label={"Search"} value={search} placeholder='Search recipe...' onChangeText={(value) => setSearch(value)} /* left={<TextInput.Icon icon={"search"} />} *//>
                </View>
                <Divider style={{ marginTop: '10px'}} />
                <ScrollView>
                    {recipe.map((item, ind) => {
                        return(<CardCom item={item} key={ind}/>)
                    })}
                </ScrollView>
            {/* </ImageBackground> */}
        </SafeAreaView>
    )
}

export default Home