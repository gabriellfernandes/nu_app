import React from "react";
import { View, Text } from "react-native";
import { stylesBalance } from "./style";

export const Balance = ({balance, expenses}) => {
  return (
    <View style={stylesBalance.container}>
      <View style={stylesBalance.item}>
        <Text style={stylesBalance.itemTitle}>Saldo</Text>
        <View style={stylesBalance.current}>
          <Text style={stylesBalance.currencySimbol}>R$</Text>
          <Text style={stylesBalance.balance}>{balance}</Text>
        </View>
      </View>
      <View style={stylesBalance.item}>
        <Text style={stylesBalance.itemTitle}>Gastos</Text>
        <View style={stylesBalance.current}>
          <Text style={stylesBalance.currencySimbol}>R$</Text>
          <Text style={stylesBalance.expenses}>{expenses}</Text>
        </View>
      </View>
    </View>
  );
};
