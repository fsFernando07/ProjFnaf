import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor : '#312e2b',
    justifyContent: 'center',
    flexDirection: 'column',
},
  caixa:{
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
  },
  caixa2:{
    width: '100%',
    height: '100%',
    backgroundColor : '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem:{
      width: 350,
      height: 450,
  },
  imagemQ:{
      width: '100%',
      height: 200,
      marginBottom: 10,
  },
  paragraph: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  texto2:{
      marginTop: 10,
      color: "#fff",
      fontSize: 22,
      fontFamily: "Roboto",
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
      flexDirection: 'column',
  },
  botao:{
      color: "#fff",
      fontSize: 22,
      fontFamily: "Roboto",
      textAlign: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#000C66",
  },
  texto3:{
      color: "#fff",
      fontSize: 18,
      fontFamily: "Roboto",
  },
  input: {
    backgroundColor: '#bbb',
    padding: 8,
    marginBottom: 12,
    borderRadius: 16,
  },
  questao: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default estilos;