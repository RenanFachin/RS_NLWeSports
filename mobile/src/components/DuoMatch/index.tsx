// Importando componentes
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Heading } from '../Heading';

// Importando estilos
import { styles } from './styles';
import { THEME } from '../../theme';

// importando ícones
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native'

// Importando bibliotecas
import * as Clipboard from 'expo-clipboard'
import { useState } from 'react';

interface Props extends ModalProps {
  discord: string;
  // onClose é uma função que tem um retorno vazio (void)
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  
  // Criando um state para saber se está sendo copiado na memória e mostrar um indicador de loading
  const [ isCopping, setIsCopping ] = useState(false)


  // Criando função para copiar (com a biblioteca clipboard) e para alertar o usuário (componente Alert)  
  async function handleCopyDiscordUserToClipboard(){

    setIsCopping(true);

    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord copiado!', 'Usuário copiado para facilitar o seu match');

    // Apenas após o alert que será dado como concluido o processo de copiar
    setIsCopping(false) 
  }


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


            <Text style={styles.label}>
              Adicione no Discord
            </Text>


          {/* Fazendo este texto ser clicável com a ajuda do touchableOpacity */}
          <TouchableOpacity 
            style={styles.discordButton}
            onPress={handleCopyDiscordUserToClipboard}
            // Se o isCopping ter valor de true, o botão será desabilitado. Desta forma será garantido que o usuário não possa ficar chamando a função diversas vezes com o clique
            disabled={isCopping}
          >

            <Text style={styles.discord}>
              {/* Se o isCopping for true ENTÃO mostrar um componente de loading(ActivityIndicator)*/}
              {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
              {discord}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}