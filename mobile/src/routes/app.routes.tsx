// Importando a estratégia de navegação entre as páginas da aplicação
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Importando as páginas da aplicação
import {Home} from '../screens/Home'
import {Game} from '../screens/Game'


// Desestruturando o createNativeStackNavigator
const { Navigator, Screen } = createNativeStackNavigator()


export function AppRoutes(){
    return(
        <Navigator>
            <Screen 
                name="home"
                component={Home}
            />

            <Screen 
                name="game"
                component={Game}
            />

        </Navigator>
    )
}