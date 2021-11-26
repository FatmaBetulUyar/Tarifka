import React from 'react'
import {View,Image,Text} from 'react-native'
import styles from './MealCard.styles'

function MealCard({meal,onPress}) {
    return (
        <View style={styles.container} onPress={onPress}>
            <View style={styles.body_container}>
                <Image style={styles.image}/>
                <Text style={styles.title}>Title</Text>
            </View>
        </View>
    )
}

export default MealCard
