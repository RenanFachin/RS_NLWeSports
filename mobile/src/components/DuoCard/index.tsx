// Importando componentes
import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

// Importanto regras de estilização
import { styles } from './styles';

// Criando uma interface de definição de tipagem para os dados recebidos do backend da aplicação
export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps
}

export function DuoCard({data}: Props) {
  return (
    <View style={styles.container}>
        {/* Padrão: label e valor */}
        <DuoInfo 
          label='Nome'
          value={data.name}
        />

        <DuoInfo 
          label='Tempo de jogo'
          value={`${data.yearsPlaying} anos`}
        />

        <DuoInfo 
          label='Disponibilidade'
          // data.weekDays.length vai retornar o tamanho do array e por tabela, o números de dias disponíveis da pessoa para jogar
          value={`${data.weekDays.length} dias`}
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