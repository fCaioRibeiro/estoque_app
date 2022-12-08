import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import IconAnt from 'react-native-vector-icons/AntDesign';

export default function HomePage({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 10}}>

      <Pressable
        style={styles.buttom}
        onPress={() => navigation.navigate('Produtos')}
      >
        <Icon name="tags" size="24" color='#fff' />
        <Text style={styles.buttom_text}>Produtos</Text>
      </Pressable>

      <Pressable
        style={styles.buttom}
        onPress={() => navigation.navigate('Cadastrar produto')}
      >
        <Icon name="plus" size="24" color='#fff' />
        <Text style={styles.buttom_text}>Cadastrar</Text>
      </Pressable>

      <Pressable
        style={styles.buttom}
        onPress={() => navigation.navigate('Buscar')}
      >
        <IconAnt name="qrcode" size="24" color='#fff' />
        <Text style={styles.buttom_text}>Buscar</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  buttom: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#259073',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 4

  },
  buttom_text: {
    fontSize: 20,
    marginTop: 10,
    color: '#fff'
  }
});