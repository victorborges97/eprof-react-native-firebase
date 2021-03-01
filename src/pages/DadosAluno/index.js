import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Content, Form, Item, Input, Label, Textarea, Picker } from 'native-base';
import IconsAwesome from "react-native-vector-icons/FontAwesome";

import { colors } from "../../../config.json";
import Background from '../../components/Background';
import { useEffect } from 'react';

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

  const [aulaspsemana, setAulaspsemana] = useState(undefined)

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
  }, [route.params.Item])

  return (
    <Background>
        <Content>

          <View style={styles.dadosaluno}>

            <View style={styles.dadosaluno__nome}>
              <Text style={styles.dadosaluno__nome_texto}>{nome || ""}</Text>
            </View>

            <View style={styles.dadosaluno__botoes}>
              <View style={styles.dadosaluno__botoes_switch}>
                <Text>INATIVO</Text>
                <Switch
                  trackColor={{ false: "#767577", true: colors.primary }}
                  thumbColor="#f4f3f4"
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={value => setIsActive(value)}
                  value={isActive}
                />
                <Text>ATIVO</Text>
              </View>
              <TouchableOpacity style={styles.dadosaluno__botao_trash}>
                <IconsAwesome name="trash" color="#B9672B" size={25} />
              </TouchableOpacity>
            </View>

            <View style={styles.dadosaluno__input}>
              <Item floatingLabel>
                <Label>Nome:</Label>
                <Input value={nome} onChangeText={value => setNome(value)} />
              </Item>
            </View>

            <View style={styles.dadosaluno__input}>
              <Item floatingLabel>
                <Label>Pais:</Label>
                <Input value={pais} onChangeText={value => setPais(value)} />
              </Item>
            </View>

            <View style={styles.dadosaluno__input}>
              <Item floatingLabel>
                <Label>Contato:</Label>
                <Input value={contato.toString()} onChangeText={value => setContato(value)} />
              </Item>
            </View>

            <View style={styles.dadosaluno__input2}>
              <View style={styles.dadosaluno__input}>
                <Item floatingLabel>
                  <Label>Perço por aula:</Label>
                  <Input value={valor.toString()} onChangeText={value => setValor(value)} />
                </Item>
              </View>
              <View style={styles.dadosaluno__input}>
                <Item floatingLabel>
                  <Label>Duração em minutos:</Label>
                  <Input value={duracao.toString()} onChangeText={value => setDuracao(value)} />
                </Item>
              </View>
            </View>

            <View style={styles.dadosaluno__input}>
                <Textarea 
                rowSpan={5} 
                bordered 
                placeholder="Observações" 
                value={obs} 
                onChangeText={value => setObs(value)}
                />
            </View>

            <View style={styles.dadosaluno__input}>
              <Item picker>
                <Label>Quantas aulas por semana:</Label>
                <Picker
                  mode="dropdown"
                  style={{ width: undefined }}
                  placeholder="Selecione quantas semanas"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={aulaspsemana}
                  onValueChange={value => setAulaspsemana(value)}
                >
                  <Picker.Item label="Selecione..." value={0} />
                  <Picker.Item label="1" value={1} />
                  <Picker.Item label="2" value={2} />
                  <Picker.Item label="3" value={3} />
                  <Picker.Item label="4" value={4} />
                  <Picker.Item label="5" value={5} />
                  <Picker.Item label="6" value={6} />
                  <Picker.Item label="7" value={7} />
                  <Picker.Item label="8" value={8} />
                </Picker>
              </Item>
            </View>

            <View style={styles.dadosaluno__input2}>
              {
                aulaspsemana > 0 && aulaspsemana !== undefined 
                && (
                  <>
                  <View style={styles.dadosaluno__input}>
                    <Item floatingLabel>
                      <Label>Qual dia?</Label>
                      <Input value={valor.toString()} onChangeText={value => setValor(value)} />
                    </Item>
                  </View>
                  <View style={styles.dadosaluno__input}>
                    <Item floatingLabel>
                      <Label>Hora:</Label>
                      <Input value={duracao.toString()} onChangeText={value => setDuracao(value)} />
                    </Item>
                  </View>
                  <View style={styles.dadosaluno__input}>
                    <Item floatingLabel>
                      <Label>Minutos:</Label>
                      <Input value={duracao.toString()} onChangeText={value => setDuracao(value)} />
                    </Item>
                  </View>
                  </>
                )
              }
            </View>


          </View>

        </Content>
    </Background>
  );
}

const styles = StyleSheet.create({
  dadosaluno: {
    paddingLeft: 15,
    paddingRight: 15
  },
  dadosaluno__nome: {
    alignItems: "center",
    marginBottom: 10,
  },
  dadosaluno__nome_texto: {
    color: colors.card__aluno_header_widge_title,
    fontSize: 18,
    fontWeight: "bold",
  },
  dadosaluno__botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  dadosaluno__botoes_switch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.card__aluno_border,
    borderRadius: 2,
    padding: 5,
  },
  dadosaluno__botao_trash: {
    padding: 5,
  },
  dadosaluno__input2: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  dadosaluno__input: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: colors.card__aluno_background,
    margin: 5,
    borderRadius: 2,
  },
});
