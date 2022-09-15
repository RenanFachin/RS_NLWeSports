import { Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

// Importando bibliotecas e dependências
import { SafeAreaView } from 'react-native-safe-area-context'

// Importando o logo
import logoImg from '../../assets/logo-nlw-esports.png'

// Importação de componentes
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';

// Importação dos styles desta página
import { styles } from './styles';


export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  useEffect(()=>{
    fetch('192.168.1.107:3333/games')
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