import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../src/config';

export default function CreateProductPage({ navigation }) {
  const [name, onChangeName] = useState("");
  const [measurement, onChangeMeasurement] = useState("");
  const [amount, onChangeAmount] = useState(null);
  const [price, onChangePrice] = useState(null);

  const productCollectionRef = (collection(db, 'products'))

  const createProduct = async () => {
    try {
      await addDoc(productCollectionRef, {
        name: name,
        price: price,
        measurement: measurement,
        amount: amount,
      })
      navigation.replace('Produtos')
    } catch (error) {

    }
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.group, { flex: 2 }]}>
          <Text style={styles.input_text}>Nome</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.input_text}>Und de medida</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeMeasurement}
            value={measurement}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.group}>
          <Text style={styles.input_text}>Valor</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePrice}
            value={price}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.input_text}>Quantidade</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAmount}
            value={amount}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={{ margin: 70 }}>
        <Button
          title="Salvar"
          color="#000"
          onPress={createProduct}
        />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  input_text: {
    fontSize: 16
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5
  },
  group: {
    flex: 1,
    margin: 2
  }
});