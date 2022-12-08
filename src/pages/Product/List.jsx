import { Text, View } from "react-native";
import CardProduct from "./Card";

export default function ListProduct({ products, navigation }) {
  return (
    products.map((product, index) =>
      <CardProduct key={index} product={product} navigation={navigation}/>
    )
  );
}