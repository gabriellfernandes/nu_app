import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { stylesMoviment } from "./style";

export const Moviment = ({ data }) => {
  const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity style={stylesMoviment.container} onPress={() => {setVisible(!visible)}} activeOpacity={0.5}>
      <Text style={stylesMoviment.date}>{data.date}</Text>

      <View style={stylesMoviment.content}>
        <Text style={stylesMoviment.label}>{data.label}</Text>

        {visible !== false ? (
          <Text
            style={
              data.type == 1 ? stylesMoviment.value : stylesMoviment.expenses
            }
          >
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
          </Text>
        ) : (
          <View style={stylesMoviment.skeleton}></View>
        )}
      </View>
    </TouchableOpacity>
  );
};
