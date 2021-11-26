import React from "react";
import { FlatList, Text, View } from "react-native";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Config from '../../config'
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./Categories.styles"

function Categories() {
  const { data, loading, error } = useFetch(`${Config.API_URL}`);
  
  console.log(Config.API_URL)
console.log(data);
  const renderCategory = ({ item }) => (
  <CategoryCard category={item} />
  );


  return <FlatList style={styles.container} data={data.categories} renderItem={renderCategory} />;
}

export default Categories;
