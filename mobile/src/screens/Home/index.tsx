import { Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

// Importando bibliotecas e dependências
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

// Importando o logo
import logoImg from '../../assets/logo-nlw-esports.png'

// Importação de componentes
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';

// Importação dos styles desta página
import { styles } from './styles';


export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  // Iniciando a navegação
  const navigation = useNavigation();

  // Criando uma função para que seja feita a navegação
  function handleOpenGamePage({ id, title, bannerUrl }: GameCardProps){
    // .navigate é uma propriedade que o useNavigation possui
    // Para que ele aceite o game como rota de navegação é preciso ir na @types e criar uma navigation.d.ts
    // { id, title, bannerUrl } são os parâmetros que a propriedade NAVIGATE recebe
    navigation.navigate('game', { id, title, bannerUrl })
  }


  useEffect(()=>{
    fetch('http://192.168.0.3:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  },[])

  return (
    <Background>
    <SafeAreaView style={styles.container}>

      <Image 
        source={logoImg}
        // style é para definir de onde ele vai trazer as infos de estilização
        style={styles.logo}
      />

      <Heading 
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar"
      />



    <FlatList 
    // Utilizando o state de "games" para gerar a listagem
    data={games}
    // keyExtractor => diz qual é o dado que será utilizado como chave única
    keyExtractor={Item => Item.id} // pega o objeto GAMES e diz que cada objeto tem um item e um item.id
    renderItem={({item}) => (
      <GameCard 
      data = {item}
      // Chamando a função (onPress) e o Onpress é uma propriedade extendida vinda do TouchableOpacityProps
      // Como o handleOpenGamePage possui parâmetros, temos que chamar ela de uma maneira diferente
      // {() => handleOpenGamePage}]
      // Caso não tenha parâtro é só chamar diretamente
      onPress={() => handleOpenGamePage(item)}
      />
    )}
    showsHorizontalScrollIndicator={false} // retira o scrollbar
    horizontal // propriedade para deixar a lista na horizontal e não na vertical (valor default)
    contentContainerStyle={styles.contentList} // Passando um style para o FlatList
    />


    </SafeAreaView>
    </Background>
  );
}