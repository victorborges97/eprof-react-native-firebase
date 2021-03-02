import styled from 'styled-components/native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Container } from "../../components/Background/styles"
import { colors } from "../../../config.json"

export const ContainerAluno = styled(Container)`
    /* flex: 1;
    padding: 10px;
    background-color: ${colors.background}; */
`

export const NomeView = styled.View`
    align-items: center;
    margin-bottom: 10px;
`

export const Nome = styled.Text`
    color: ${colors.card__aluno_header_widge_title};
    font-size: 18px;
    font-weight: bold;
`

export const Botoes = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
`

export const BotaoSwitch = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.card__aluno_border};
    border-radius: 2px;
    padding: 5px;
`

export const Btn = styled(TouchableOpacity)``

export const FormView = styled.View`
    margin-bottom: 30px;
`

export const InputView = styled.View`
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: ${({justify}) => justify ? "space-evenly" : "space-between"};
`

export const Horario = styled.View`
    flex-direction: column;
`

// export const NOME = styled.View``

// export const NOME = styled.View``

// export const NOME = styled.View``

// export const NOME = styled.View``

// export const NOME = styled.View``

// export const NOME = styled.View``

// export const NOME = styled.View``

// export const NOME = styled.View``

// export const NOME = styled.View``

