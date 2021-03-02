import styled from 'styled-components/native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { colors } from "../../../config.json"

export const Container = styled(ScrollView)`
    flex: 1;
    padding: 10px;
    background-color: ${colors.background};
`