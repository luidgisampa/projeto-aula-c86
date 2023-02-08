import React, { Component } from "react";
//importar o component responsável pelos estilos que vem do bloco lá embaixo
import {  Text, View,StyleSheet  } from "react-native";
import firebase from "firebase";


export default class Logout extends Component {

//descomentar o bloco de código correto

    componentDidMount() {
        firebase.auth().signOut();
        this.props.navigation.replace("Login");
    }

//dentro de render, View, colocar um texto "sair" para esta página
  render() {
        return (
            <View style={styles.container}>
             <Text>sair</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
