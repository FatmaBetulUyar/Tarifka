import React from 'react'
import { FlatList } from 'react-native'
import MealCard from '../../components/MealCard/MealCard'
import Config from '../../config'
import useFetch from '../../hooks/useFetch/useFetch'

function Meals({navigation,route}) {

    

  

   
    
const renderMeals=({item})=>{
    <MealCard meal={item} />
}

    return <FlatList data={data.meals} renderItem={renderMeals}/>
}

export default Meals
