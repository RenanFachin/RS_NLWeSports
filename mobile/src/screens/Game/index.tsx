// Importando bibliotecas e dependências
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native' // serve para resgatar as infos que vem da rota
import { Entypo } from '@expo/vector-icons'

// Importando componente
import { Heading } from '../../components/Heading';
import { Background } from '../../components/Background';
import { View, TouchableOpacity, Image } from 'react-native'

// Importando a tipagem necessária dos parâmetros
import { GameParams } from '../../@types/navigation';

// Importando os estilos
import { THEME } from '../../theme';
import { styles } from './styles';

// Importando imagem que será utilizada
import logoImg from '../../assets/logo-nlw-esports.png'


export function Game() {
  // Iniciando o useNavigation
  const navigation = useNavigation();

  // Iniciando o useRoute
  const route = useRoute();

  // Pegando os parâmetros que são obtidos e colocando eles na constante game
  // É necessário criar uma tipagem para que ele possa saber os parâmetros que ele recebe
  // as GameParams faz ele buscar na @types/navigation.d.ts a tipagem
  const game = route.params as GameParams;
  

  // Criando uma função para a seta de voltar fazer algo
  function handleGoBack(){
    // goBack é um método do próprio useNavigation e faz a volta da página
    navigation.goBack()
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image 
            source={logoImg}
            style={styles.logo}
          />

          <View style={styles.right}>
            {/* Esta view vazia é um "hack" para gerar uma terceira posição e o space-between deixar a logo ao centro da tela */}
          </View>
        </View>

        <Heading 
          // O title vai pegar dos parâmetros enviados pela rota de navegação
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

      </SafeAreaView>
    </Background>
  );
}