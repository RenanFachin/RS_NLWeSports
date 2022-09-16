// Importando componentes
import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native';
import { Heading } from '../Heading';

// Importando estilos
import { styles } from './styles';
import { THEME } from '../../theme';

// importando ícones
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native'

interface Props extends ModalProps {
  discord: string;
  // onClose é uma função que tem um retorno vazio (void)
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  return (
    // Transparent deixa o modal com fundo transparente
    // StatusBarTranslucent faz o modal cobrir também o statusbar do usuário
    <Modal 
      {...rest} 
      transparent 
      statusBarTranslucent
      animationType='fade'
      // animationType cria um efeito ao abrir o modal. O padrão do animationtype é slide
    >
      <View style={styles.container}>
        <View style={styles.content}>

          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500}/>
          </TouchableOpacity>


          <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            // Manipulando a espessura dos ícones com a propriedade weight
            weight='bold'
          />

          <Heading 
            title="Let'sPlay"
            subtitle='Agora é só começar a jogar!'
            // Manipulando o heading para que ele fique em uma posição diferente
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          {/* Fazendo este texto ser clicável com a ajuda do touchableOpacity */}
          <TouchableOpacity style={styles.discordButton}>
            <Text style={styles.label}>
              Adicione no Discord
            </Text>
          </TouchableOpacity>


          <Text style={styles.discord}>
            {discord}
          </Text>

        </View>
      </View>
    </Modal>
  );
}