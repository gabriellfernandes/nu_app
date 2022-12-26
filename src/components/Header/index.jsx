import { Text, View, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import { stylesHeader } from "./style";
import { MotiText, MotiView } from "moti";

export const Header = ({ name }) => {
  return (
    <View style={stylesHeader.container}>
      <MotiView
        style={stylesHeader.content}
        from={{ translateY: -150, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
      >
        <Text style={stylesHeader.username}>{name}</Text>
        <TouchableOpacity activeOpacity={0.7} style={stylesHeader.buttonUser}>
          <Feather name="user" size={24} color="#fff" />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
};
