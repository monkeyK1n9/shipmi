import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { PrimaryButtonView, SecondaryButtonView } from './ButtonStyle';
import {theme} from '../../../../infrastructure/theme'

export const PrimaryButton = ({pressAction, title}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => pressAction()}
        >
            <PrimaryButtonView>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: theme.colors.ui.quartenary
                    }}
                >
                    {title}
                </Text>
            </PrimaryButtonView>
        </TouchableOpacity>
    )
}

export const SecondaryButton = ({pressAction, title}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => pressAction()}
        >
            <SecondaryButtonView>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: theme.colors.ui.primary
                    }}
                >
                    {title}
                </Text>
            </SecondaryButtonView>
        </TouchableOpacity>
    )
}