// Importa os componentes Text e View da biblioteca react-native
import { Text, View } from "react-native";

// Criar e exportar a função com a tela Despesas
export default function Expenses() {
    return (
        // View é um contêiner que suporta layout usando flexbox, estilo, e manipulação de toques
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Despesas
            </Text>
        </View>
    )
}