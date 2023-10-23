import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, Chip, Divider } from 'react-native-paper';
import axios from 'axios';

const Detailes = ({route, navigation}) => {

    const {id} = route.params;

    const [recipe, setRecipe] = useState('')
    const [loading, setLoading] = useState(true)

    const getSingleRecipe = async() => {
        return await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=665b69dd&app_key=8e20d5ab5239cf29f18e5c7e8cafd470`).then((response) => {
            setRecipe(response.data.recipe)
            setLoading(false)
        }).catch((err) => {
            console.log("error: ", err);
            setLoading(false)
        })
    }
    
    useEffect(() => {
        getSingleRecipe()
    }, [loading])

    return (
        <ScrollView>
            <Button style={{ marginTop: 30, width: 30, marginBottom: 10}} onPress={()=> navigation.goBack()} icon={"arrow-left"}></Button>
                <Card>
                <Card.Cover source={{ uri: recipe?.image }} />
                <Card.Title title={recipe?.label} subtitle={`Calories: ${recipe?.calories}`} />
                <Card.Content>
                    <Text variant="titleLarge">Cautions: {recipe?.cautions ? recipe.cautions : ""}</Text>
                    <Text variant="bodyMedium">Cautions Type: {recipe?.cuisineType ? recipe.cuisineType : ""}</Text>
                    <Text variant="bodyMedium">Meal Type: {recipe?.mealType}</Text>
                    <Text variant="bodyMedium">Diet Labels: {recipe?.dietLabels}</Text>
                </Card.Content>
                <Divider />

                <View>
                    <Text style={{ marginLeft: 15, marginTop: 10, fontSize: 18, fontWeight: 700}}>Ingredients</Text>
                    {recipe?.ingredients?.map((value, ind) => {
                        return(<View key={ind} style={{ width: '100%', padding: 10}}>
                            <Image source={{uri: value.image}} alt='ingredient image' style={{ width: "100%", height: 200}} />
                            <Text>Ingredient Name: {value.food}</Text>
                            <Text>Ingredient Category: {value.foodCategory}</Text>
                            <Text>Measure: {value.measure}</Text>
                            <Text>Quantity/Instruction: {value.text}</Text>
                            <Text>Weight: {value.weight}</Text>
                        </View> )
                    })}
                </View>
                </Card>
        </ScrollView>
    )
}

export default Detailes