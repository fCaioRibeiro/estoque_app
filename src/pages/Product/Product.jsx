import { Button, StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function ProductPage({ route, navigation }) {
  const { product } = route.params;

  return (
    <View
      style={styles.card}
    >
      <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 20 }}>{product.name}</Text>
      <Text style={{ fontSize: 20, marginBottom: 3 }}>Valor: {product.price}</Text>
      <Text style={{ fontSize: 20, marginBottom: 3 }}>Quantidade: {product.amount}</Text>
      <Text style={{ fontSize: 20, marginBottom: 3 }}>Undiade de medida: {product.measurement}</Text>
      <View style={{ marginVertical: 30, display: 'flex', alignItems: 'center' }}>
        <QRCode
          size={200}
          value={product.id}
        />
      </View>

      {/* <Button
        title="Imprimir"
        color="#000"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    elevation: 1,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 3,
    backgroundColor: 'white'
  }
});
