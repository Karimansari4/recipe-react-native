import { View, Text } from 'react-native'
import React from 'react'
import { Button, Card, Icon } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const CardCom = ({item}) => {
    const navigation = useNavigation()

    const id = item?.recipe?.uri?.split("#")[1].split("_")[1]

    

    const addToFavorite = (item) => {

    }

    return (
      <View style={{marginBottom: '10px'}}>
          <Card>
          <Card.Cover source={{ uri: item?.recipe?.image }} />
          <Card.Title title={item?.recipe?.label} subtitle={`Calories: ${item?.recipe?.calories}`} />
          <Card.Actions>
              <Icon source="heart-outline" size={20} />
              <Button onPress={() => navigation.navigate("details", {id: id})}>View</Button>
          </Card.Actions>
          </Card>
      </View>
    )
}

export default CardCom