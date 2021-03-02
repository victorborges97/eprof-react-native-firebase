import React, { useState, ReactFragment, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Header, Content, Form, Item, Input, Label, Textarea, Picker } from 'native-base';
import IconsAwesome from "react-native-vector-icons/FontAwesome";

import InputPadrao from "../../components/InputPadrao"

import { 
  ContainerAluno,
  NomeView,
  Nome,
  Botoes,
  BotaoSwitch,
  Btn,
  FormView,
  InputView,
  Horario
 } from "./styles"

import { colors } from "../../../config.json";


export default function DadosAluno({ route }) {

  const [nome, setNome] = useState("");
  const [id, setId] = useState("");
  const [obs, setObs] = useState("");
  const [atendimento, setAtendimento] = useState([]);
  const [valor, setValor] = useState("");
  const [nivelEscolar, setNivelEscolar] = useState("");
  const [idade, setIdade] = useState("");
  const [escola, setEscola] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [duracao, setDuracao] = useState("");
  const [pais, setPais] = useState("");
  const [contato, setContato] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [aulaspsemana, setAulaspsemana] = useState("")

  useEffect(() => {
    const { Item } = route.params;
    setIsActive(Item.isActive)
    setDuracao(Item.duracao)
    setContato(Item.contato)
    setPais(Item.pais)
    setPagamento(Item.pagamento)
    setEscola(Item.escola)
    setIdade(Item.idade)
    setNivelEscolar(Item.nivelEscolar)
    setValor(Item.valor)
    setAtendimento(Item.atendimento)
    setObs(Item.obs)
    setId(Item.id)
    setNome(Item.nome)
    setAulaspsemana(Item.qtdePSemana)
  }, [route.params.Item])

  const setAulasPSemana = (qt) => {
    let total = Number(qt)
    if(qt > aulaspsemana) {
      let arrayTest = {"dia":".","hora":"00:00","data": "", "preco": valor, "duracao": duracao, "pagamento": "Pedente", "cancelado": "Não"}
      if(atendimento.length !== 0) {
        for (var i = 0; i < total; i++) {
          setAtendimento([
            ...atendimento,
            arrayTest
          ]);
        }
        setAulaspsemana(total.toString())
        return
      } else {
        for (var i = 0; i < total; i++) {
          setAtendimento([
            ...atendimento,
            arrayTest
          ]);
        }
        setAulaspsemana(total.toString())
        return
      }
    } else if(qt < aulaspsemana) {
      setAtendimento([
        atendimento.pop()
      ])
      // setAulaspsemana(total.toString())
      return
    }
  }

  console.warn(atendimento)

  return (
      <ContainerAluno>
        <NomeView>
          <Nome>{nome || ""}</Nome>
        </NomeView>

        <Botoes>
          <BotaoSwitch>
            <Text>INATIVO</Text>
            <Switch
              trackColor={{ false: "#767577", true: colors.primary }}
              thumbColor="#f4f3f4"
              ios_backgroundColor="#3e3e3e"
              onValueChange={value => setIsActive(value)}
              value={isActive}
            />
            <Text>ATIVO</Text>
          </BotaoSwitch>
          <Btn style={{padding: 5}}>
            <IconsAwesome name="trash" color="#B9672B" size={25} />
          </Btn>
        </Botoes>

        <FormView>
        
          <InputPadrao 
            label="Nome"
            value={nome}
            autoCorrect={false}
            corInput={colors.card__aluno_textoTitulo}
            // corBackground={colors.card__aluno_background}
            onChange={(itemValue, itemIndex) => setNome(itemValue)}
          />

          <InputPadrao 
            label="Pais"
            value={pais}
            autoCorrect={false}
            corInput={colors.card__aluno_textoTitulo}
            // corBackground={colors.card__aluno_background}
            onChange={(itemValue, itemIndex) => setPais(itemValue)}
          />

          <InputPadrao 
            label="Contato"
            value={contato.toString()}
            autoCorrect={false}
            field="phone"
            corInput={colors.card__aluno_textoTitulo}
            // corBackground={colors.card__aluno_background}
            onChange={(itemValue, itemIndex) => setContato(itemValue)}
          />

          <InputView>
            <InputPadrao 
              label="Perço por aula"
              value={valor.toString()}
              autoCorrect={false}
              widthView={"48%"}
              marginRight={"1%"}
              corInput={colors.card__aluno_textoTitulo}
              // corBackground={colors.card__aluno_background}
              onChange={(itemValue, itemIndex) => setValor(itemValue)}
            />

            <InputPadrao 
              label="Duração em minutos"
              value={duracao.toString()}
              autoCorrect={false}
              widthView={"48%"}
              marginLeft={"1%"}
              corInput={colors.card__aluno_textoTitulo}
              // corBackground={colors.card__aluno_background}
              onChange={(itemValue, itemIndex) => setDuracao(itemValue)}
            />
          </InputView>

          <InputPadrao
            label="Observações"
            value={obs}
            autoCorrect={false}
            multiline={true}
            multlines={100}
            corInput={colors.card__aluno_textoTitulo}
            editable
            onChange={(itemValue, itemIndex) => setObs(itemValue)}
          />

          <InputPadrao
            label="Quantas aulas por semana"
            value={aulaspsemana.toString()}
            pickerItem={true}
            corInput={colors.card__aluno_textoTitulo}
            onChange={(itemValue, itemIndex) => setAulasPSemana(itemValue)}
          >
            <Picker.Item label="Selecione..." value="0" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
          </InputPadrao>

          <Horario>
            {
              atendimento.length !== 0 
              && (
                atendimento.map(item => {
                  return (
                    <InputView justify={true}>
                      <InputPadrao 
                        label="Qual dia"
                        value={item.dia}
                        autoCorrect={false}
                        widthView={"56%"}
                        marginRight={"1%"}
                        pickerItem={true}
                        corInput={colors.card__aluno_textoTitulo}
                        // corBackground={colors.card__aluno_background}
                        onChange={(itemValue, itemIndex) => {}}
                      >
                        <Picker.Item label="Selecione..." value="." />
                        <Picker.Item label="Segunda-feira" value="Segunda-feira" />
                        <Picker.Item label="Terça-feira" value="Terça-feira" />
                        <Picker.Item label="Quarta-feira" value="Quarta-feira" />
                        <Picker.Item label="Quinta-feira" value="Quinta-feira" />
                        <Picker.Item label="Sexta-feira" value="Sexta-feira" />
                      </InputPadrao>
          
                      <InputPadrao 
                        label="Hora"
                        value={item.hora}
                        autoCorrect={false}
                        widthView={"40%"}
                        marginLeft={"1%"}
                        keyboardType='numeric'
                        corInput={colors.card__aluno_textoTitulo}
                        // corBackground={colors.card__aluno_background}
                        onChange={(itemValue, itemIndex) => {}}
                      />
                    </InputView>
                  )}
                )
              )
            }
          </Horario>

        </FormView>

      </ContainerAluno>
  );
}
