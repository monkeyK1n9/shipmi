import React from "react";
import styled, { useTheme } from "styled-components/native";


const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position: string, size: string, theme: any) : string => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView : any = styled.View<{variant: string}>`
  ${({variant}) => variant}
`

export const Spacer = ({position, size, children = null}) => {
    const theme = useTheme()
    const variant = getVariant(position, size, theme)
    return (
      <SpacerView variant={variant}>
        {children}
      </SpacerView>
    )
}

Spacer.defaultProps = {
  position: "top",
  size: "small",
};