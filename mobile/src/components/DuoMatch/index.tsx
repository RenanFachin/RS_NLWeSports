// Importando componentes
import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native';

// Importando estilos
import { styles } from './styles';
import { THEME } from '../../theme';

// importando ícones
import { MaterialIcons } from '@expo/vector-icons'

interface Props extends ModalProps {
  discord: string;
}

export function DuoMatch({ discord, ...rest }: Props) {
  return (
    // Transparent deixa o modal com fundo transparente
    // StatusBarTranslucent faz o modal cobrir também o statusbar do usuário
    <Modal {...rest} transparent statusBarTranslucent>
      <View style={styles.container}>
        <View style={styles.content}>

          <TouchableOpacity style={styles.closeIcon}>
            <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500}/>
          </TouchableOpacity>

          <Text style={styles.discord}>
            {discord}
          </Text>

        </View>
      </View>
    </Modal>
  );
}