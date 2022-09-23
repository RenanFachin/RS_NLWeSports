import { Image, TouchableOpacity, Text } from 'react-native';

// Importando bibliotecas e dependências
import { SafeAreaView } from 'react-native-safe-area-context'

// Importando o logo
import logoImg from '../../assets/logo-nlw-esports.png'

// Importação de componentes
import { Heading } from '../../components/Heading';
import { Background } from '../../components/Background';

// Importação dos styles desta página
import { styles } from './styles';
import { GameController } from 'phosphor-react-native';
import { THEME } from '../../theme';


export function SignIn() {

  async function handleDiscordSignIn(){

  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>

        <Image source={logoImg} style={styles.logo} />

        <Heading 
          title="Entrar"
          subtitle="Encontre o seu duo e bora jogar!"
        />

        <TouchableOpacity style={styles.button} onPress={handleDiscordSignIn}>

          <GameController 
          color={THEME.COLORS.TEXT} 
          size={20} 
          />

          <Text style={styles.buttonTittle}>
            Entrar com discord
          </Text>

        </TouchableOpacity>

      </SafeAreaView>
    </Background>
  );
}