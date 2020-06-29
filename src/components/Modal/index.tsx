import React from 'react';
import RNModal from 'react-native-modal';

export default function Modal(props): React.FC {
  return <RNModal isVisible={props.isVisible}>{props.children}</RNModal>;
}
