// Importações de "componentes nativos" do react-native
import { StatusBar } from 'react-native'

// Importações personalizadas (fonts)
import { 
  useFonts, 
  Inter_400Regular,
  Inter_600SemiBold, 
  Inter_700Bold,
  Inter_900Black
 } from '@expo-google-fonts/inter'

// Importação do componente Background
import { Background } from './src/components/Background';

// Importação das Screens
import { Home } from './src/screens/Home'


export default function App() {
  // useFonts é o responsável pelo carregamento das fontes
  // fontsLoaded é uma constante criada para GARANTIR que as fontes tenham já sido inicializadas
  // fontsLoaded é do tipo booleano
  const [fontsLoaded] = useFonts({  
    Inter_400Regular,
    Inter_600SemiBold, 
    Inter_700Bold,
    Inter_900Black
  });


  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        // fazendo os dados da statusbar sobrepor
        translucent
      />

      {/* Verificando se as fontes já foram inicializadas */}
      {/* Se a fonte já foi carregada = exibir a página HOME */}
      {/* Caso contrário, mostrar um componente de LOADING */}
      { fontsLoaded ? <Home /> : }
      
    </Background>
  );
}

