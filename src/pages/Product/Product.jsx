import { useRef } from "react";
import { Alert, Button, Share, StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import ViewShot from "react-native-view-shot";

export default function ProductPage({ route, navigation }) {
  const { product } = route.params;

  const ref = useRef();

  const onCapture = () => {
    ref.current.capture().then(uri => {
      Share.share({
        title: product.name,
        url: uri
      })
    });
  };

  return (
    <>
      <ViewShot ref={ref} style={styles.card} options={{ fileName: "Your-File-Name", format: "jpg", quality: 0.9 }}>
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
      </ViewShot>

      <Button
        title="Compartilhar"
        color="#000"
        onPress={onCapture}
      />
    </>
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
