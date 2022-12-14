// Importando bibliotecas e dependências
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native' // serve para resgatar as infos que vem da rota
import { Entypo } from '@expo/vector-icons'
import { useEffect, useState } from 'react'

// Importando componente
import { Heading } from '../../components/Heading';
import { Background } from '../../components/Background';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native'

// Importando a tipagem necessária dos parâmetros
import { GameParams } from '../../@types/navigation';

// Importando os estilos
import { THEME } from '../../theme';
import { styles } from './styles';

// Importando imagem que será utilizada
import logoImg from '../../assets/logo-nlw-esports.png'


export function Game() {
  // Criando um estado para atualização da API
  const [duos, setDuos] = useState<DuoCardProps[]>([])

  // Criando um estado para manipular a propriedade visible do duoMatch
  const [discordDuoSelected, setDiscordDuoSelected] = useState('')

  // Iniciando o useNavigation
  const navigation = useNavigation();

  // Iniciando o useRoute
  const router = useRoute();

  // Pegando os parâmetros que são obtidos e colocando eles na constante game
  // É necessário criar uma tipagem para que ele possa saber os parâmetros que ele recebe
  // as GameParams faz ele buscar na @types/navigation.d.ts a tipagem
  const game = router.params as GameParams;
  

  // Criando uma função para a seta de voltar fazer algo
  function handleGoBack(){
    // goBack é um método do próprio useNavigation e faz a volta da página
    navigation.goBack()
  }

  // Função para buscar o usuário conforme o ID do anúncio no banco de dados (API)
  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.0.3:3333/ads/${adsId}/discord`)
    .then(response => response.json())
    .then(data => {
      // Atribuindo um valor para o estado
      setDiscordDuoSelected(data.discord)
    })
  }

  // Deixando a requisição de forma dinâmica
  // Se o jogo tiver um anúncio, ele retornará um array com dados. Caso contrário, retornará vazio o array
  useEffect(()=>{
    fetch(`http://192.168.0.3:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => {
        setDuos(data)
      })
  },[])

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

        <Image
          // Pegando o parâmetro passado pela rota de navegação
          source={{uri: game.bannerUrl}}
          style={styles.cover}
          resizeMode="cover" // Faz sempre a imagem encaixar no local desejado
        />

        <Heading 
          // O title vai pegar dos parâmetros enviados pela rota de navegação
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard 
            data={item} 
            onConnect={() => getDiscordUser(item.id)}
            // item.id é o id do anúncio
            />
          )}
          horizontal // deixa um ao lado do outro
          style={styles.containerList}
          // Se tem conteudo = styles.contentList. Caso não tenha = styles.emptyListContent
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]} // atribui um estilo para a flatList
          showsHorizontalScrollIndicator={false} // desativa a barra de rolagem
          // Criando uma condição para quando a lista de anúncios estiver vazia
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados para este jogo
            </Text>
          )}
        />

            <DuoMatch 
            // Propriedade visible só existe pelos ...rest
            // Fazendo o visible ser dinâmico
              visible={discordDuoSelected.length > 0}
              discord={discordDuoSelected}
              onClose={() => setDiscordDuoSelected('')}
              // Desta forma, ao clicar no x, será atribuido um texto vazio para a variável e consequentemente irá fechar o modal com visible = false
            />

      </SafeAreaView>
    </Background>
  );
}