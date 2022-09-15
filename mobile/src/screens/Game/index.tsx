// Importando bibliotecas e dependências
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native' // serve para resgatar as infos que vem da rota

// Importando componente
import { Background } from '../../components/Background';

import { styles } from './styles';

export function Game() {
  
  // Iniciando o useRoute
  const route = useRoute();

  // Pegando os parâmetros que são obtidos e colocando eles na constante game
  // É necessário criar uma tipagem para que ele possa saber os parâmetros que ele recebe
  const game = route.params;
  console.log(game)

  return (
    <Background>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </Background>
  );
}