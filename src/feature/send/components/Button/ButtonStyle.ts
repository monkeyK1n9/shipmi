import {View, Dimensions} from 'react-native'
import styled from 'styled-components/native'

export const PrimaryButtonView = styled(View)`
    width: ${0.8*Dimensions.get('window').width}px;
    background-color: ${props => props.theme.colors.ui.primary};
    paddingVertical: ${props => props.theme.space[3]};
    border-radius: ${props => props.theme.space[2]}
    align-items: center;
    justify-content: center;
`
export const SecondaryButtonView = styled(View)`
    width: ${0.8*Dimensions.get('window').width}px;
    paddingVertical: ${props => props.theme.space[3]};
    border-radius: ${props => props.theme.space[2]};
    border-style: solid;
    border-width: 2px
    border-color: ${props => props.theme.colors.ui.primary};
    align-items: center;
    justify-content: center;
`