// Importando o container de navegação
import { NavigationContainer } from '@react-navigation/native'

// Importando as rotas da aplicação
import { AppRoutes } from './app.routes'


export function Routes(){
    return(
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}