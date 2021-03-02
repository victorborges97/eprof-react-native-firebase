import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView, Linking } from 'react-native';

import { colors } from "../../../config.json"
import { data } from "../../../data.json"

import {
    ContainerDashboard
} from "./styles"

export default function Login({navigation}) {

    const WhatsApp = (text) => {
    let msg = `
    Aluno(a): ${text.nome}

    Obs: ${text.obs}

    `
    Linking.openURL(`whatsapp://send?text=${msg}`);
    }

    const Aluno = ({ item }) => (
        <View style={styles.containerAluno}>
            <View style={styles.containerAluno__Header}>
                <Text style={styles.containerAluno__Header_texto_nome}>{item.nome}</Text>
                <Text style={styles.containerAluno__Header_texto} numberOfLines={2}>
                    Obs: {item.obs}
                </Text>
                <View style={styles.containerAluno__Header_horario}>
                    {
                        item.atendimento.map((ite, idx) => (
                            <Text key={idx} style={styles.containerAluno__Header_horario_texto}>{ite.dia+`, `+ite.hora}</Text>
                        ))
                    }
                </View>
            </View>
            <View style={styles.containerAluno__Linha}></View>
            <View style={styles.containerAluno__Botoes}>
                <TouchableOpacity 
                    style={{padding: 3}}
                    onPress={() => navigation.navigate('Dados', { Item: item })} >
                    <Text style={styles.containerAluno__Botoes_Botao_Texto}>DADOS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{padding: 3}}
                    onPress={() => navigation.navigate('Dados', { Item: item })}
                >
                    <Text style={styles.containerAluno__Botoes_Botao_Texto}>AULAS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{padding: 3}}
                    onPress={() => navigation.navigate('Dados', { Item: item })}
                >
                    <Text style={styles.containerAluno__Botoes_Botao_Texto}>PAGAMENTOS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{padding: 3}}
                    onPress={() => WhatsApp(item)}
                >
                    <Text style={styles.containerAluno__Botoes_Botao_Texto}>WHATSAPP</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    const ItemSeprator = () => <View style={{
        height: 10,
        width: "100%",
        backgroundColor: "transparent",
      }} />

    return (
        <ContainerDashboard>

            <FlatList
                style={{width: "100%"}}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={ItemSeprator}
                data={data}
                contentContainerStyle={{
                    paddingVertical: 5,
                }}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={Aluno}
            />

        </ContainerDashboard>
    );
}

const styles = StyleSheet.create({

    containerAluno: {
        minHeight: 100,
        width: "100%",
        backgroundColor: colors.card__aluno_background,
        borderColor: colors.card__aluno_border,
        borderWidth: 0.5,
        justifyContent: "space-evenly",
    },
    containerAluno__Header: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    containerAluno__Header_texto_nome: {
        color: colors.card__aluno_textoTitulo,
        fontSize: 16,
        fontWeight: "bold"
    },
    containerAluno__Header_texto: {
        color: colors.card__aluno_textoTitulo,
    },
    containerAluno__Linha: {
        backgroundColor: colors.card__aluno_linha,
        height: 1.5,
    },
    containerAluno__Botoes: {
        height: 35,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingStart: 10,
        paddingEnd: 10,
    },
    containerAluno__Botoes_Botao_Texto: {
        color: colors.card__aluno_link,
        textDecorationLine: "underline",
    },
    containerAluno__Header_horario: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    containerAluno__Header_horario_texto: {
        margin: 3,
        backgroundColor: colors.card__aluno_header_widge,
        borderRadius: 25,
        paddingLeft: 5,
        paddingRight: 5,
        color: colors.card__aluno_header_widge_title
    }









});
