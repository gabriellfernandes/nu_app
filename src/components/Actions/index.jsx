import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import {AntDesign} from "@expo/vector-icons"

import { stylesActions } from "./style";

export const Actions = () => {
  return (
    <ScrollView style={stylesActions.container} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
       <TouchableOpacity style={stylesActions.actionButton}>
            <View style={stylesActions.areaButton}>
                <AntDesign name="addfolder" size={28} colo="#000" />
            </View>
            <Text style={stylesActions.labelButton}>Entradas</Text>
       </TouchableOpacity>

       <TouchableOpacity style={stylesActions.actionButton}>
            <View style={stylesActions.areaButton}>
                <AntDesign name="tagso" size={28} colo="#000" />
            </View>
            <Text style={stylesActions.labelButton}>Compras</Text>
       </TouchableOpacity>

       <TouchableOpacity style={stylesActions.actionButton}>
            <View style={stylesActions.areaButton}>
                <AntDesign name="creditcard" size={28} colo="#000" />
            </View>
            <Text style={stylesActions.labelButton}>Carteira</Text>
       </TouchableOpacity>
       <TouchableOpacity style={stylesActions.actionButton}>
            <View style={stylesActions.areaButton}>
                <AntDesign name="barcode" size={28} colo="#000" />
            </View>
            <Text style={stylesActions.labelButton}>Boletos</Text>
       </TouchableOpacity>
       <TouchableOpacity style={stylesActions.actionButton}>
            <View style={stylesActions.areaButton}>
                <AntDesign name="setting" size={28} colo="#000" />
            </View>
            <Text style={stylesActions.labelButton}>Conta</Text>
       </TouchableOpacity>
    </ScrollView>
  );
};
