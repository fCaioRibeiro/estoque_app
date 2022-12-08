import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function CardProduct({ product, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Produto', { product })}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{product.name}</Text>
      <Text>Valor: {product.price}</Text>
      <Text>Quantidade: {product.amount}</Text>
      <Text>Undiade de medida: {product.measurement}</Text>
      {/* <QRCode
        value={product.id}
      /> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    elevation: 1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 3,
    backgroundColor: 'white',
    borderWidth: '1px',
    borderColor: 'gray'
    // shadowOffset: {
    //   width: 4,
    //   height: 4
    // },
    // shadowColor: "black",
    // shadowOpacity: 0.1,
    // shadowRadius: 4
  }
});
