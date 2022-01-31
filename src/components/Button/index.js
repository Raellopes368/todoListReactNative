import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity  } from 'react-native';


export default function Button({ onClick }) {
  return (
    <TouchableOpacity onPress={onClick}>
        <FontAwesome name="trash" color="#f00" size={23} />
      </TouchableOpacity>
  );
}