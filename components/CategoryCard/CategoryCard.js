import React from 'react'
import {View,Text,Image} from 'react-native'
import styles from './CategoryCard.styles'

function CategoryCard({category}) {


    return (
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Image source={{uri:category.strCategoryThumb}} style={styles.image}/>
          <Text style={styles.title}>{category.strCategory}</Text>
          </View>
      </View>
    )
}

export default CategoryCard
