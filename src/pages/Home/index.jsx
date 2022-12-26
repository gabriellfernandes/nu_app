import { FlatList, Text, View } from "react-native";
import { Actions } from "../../components/Actions";
import { Balance } from "../../components/Balance";
import { Header } from "../../components/Header";
import { Moviment } from "../../components/Moviments";
import { stylesHome } from "./style";

const listInfo = [
  {
    id: 1,
    label: "Conta de Internet",
    value: "300,50",
    date: "20/12/2022",
    type: 0,
  },
  {
    id: 2,
    label: "Conta de Agua",
    value: "180,50",
    date: "23/12/2022",
    type: 0,
  },
  {
    id: 3,
    label: "Pix de Client",
    value: "3200,50",
    date: "10/12/2022",
    type: 1,
  },
  {
    id: 4,
    label: "Salario",
    value: "500,00",
    date: "2/12/2022",
    type: 1,
  },
];

export const Home = () => {
  return (
    <View style={stylesHome.container}>
      <Header name="Rick" />
      <Balance balance={"40,82"} expenses={"980,00"} />
      <Actions />
      <Text style={stylesHome.title}> Ultimas Movimentações</Text>
      <FlatList
        style={stylesHome.list}
        data={listInfo}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviment data={item} />}
      />
    </View>
  );
};
