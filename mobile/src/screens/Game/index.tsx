// Importando bibliotecas e dependências
import { SafeAreaView } from 'react-native-safe-area-context'

// Importando componente
import { Background } from '../../components/Background';

import { styles } from './styles';

export function Game() {
  return (
    <Background>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </Background>
  );
}