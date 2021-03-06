import React from 'react';
import { Platform } from 'react-native';
import Styled from 'styled-components/native';

const Text = Styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export default function Subtitle() {
  return <Text>{`On ${Platform.OS.toUpperCase()}`}</Text>
}
