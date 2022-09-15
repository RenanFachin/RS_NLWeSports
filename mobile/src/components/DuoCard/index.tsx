// Importando componentes
import { View, TouchableOpacity, Text } from 'react-native';
import { DuoInfo } from '../DuoInfo';

// Importanto regras de estilização
import { styles } from './styles';
import { THEME } from '../../theme';

// Importando de bibliotecas
import { GameController } from 'phosphor-react-native'

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
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({data, onConnect}: Props) {
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
          // \u2022 simboliza uma bolinha
          value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
        />

        <DuoInfo 
          label='Chamada de áudio?'
          // Se o useVoiceChanner for true ele retorna o texto Sim
          value={data.useVoiceChannel? "Sim" : "Não"}
          // Definindo uma nova cor para o texto. lembrando que o default é color: white
          // Se ele for true, retorna como color: green. Casp contrário color: red
          colorValue={data.useVoiceChannel? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
        />  


        {/* Botão de se conectar com a pessoa */}
        <TouchableOpacity
          style={styles.button}
          onPress={onConnect}
        >
          <GameController 
            color={THEME.COLORS.TEXT}
            size={20}
          />

          <Text style={styles.buttonTitle}>
            Conectar
          </Text>

        </TouchableOpacity>
    </View>
  );
}