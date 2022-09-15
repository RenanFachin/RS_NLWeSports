// Importando componentes
import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

// Importanto regras de estilização
import { styles } from './styles';

// Criando uma interface para os dados recebidos do backend da aplicação
export interface DuoCardProps {

}

export function DuoCard() {
  return (
    <View style={styles.container}>
        {/* Padrão: label e valor */}
        <DuoInfo 
          label='Nome'
          value='Renan'
        />

        <DuoInfo 
          label='Tempo de jogo'
          value='2 anos'
        />

        <DuoInfo 
          label='Disponibilidade'
          value='3 dias - 18h - 20h'
        />

        <DuoInfo 
          label='Chamada de aúdio?'
          value='Sim'
          // Definindo uma nova cor para o texto. lembrando que o default é color: white
          colorValue='red'
        />  

    </View>
  );
}