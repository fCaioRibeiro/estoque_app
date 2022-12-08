import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import ListProduct from "./List";
import { db } from '../../../src/config';
import { collection, getDocs } from "firebase/firestore";

export default function ProductsPage({ navigation }) {
  const [ products, setProducts ] = useState([])
  const productsCollectionRef = collection(db, "products")

  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  }
 
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ScrollView style={{ flex: 1 }}>
      <ListProduct products={products} navigation={navigation}/>      
    </ScrollView>
  );
}