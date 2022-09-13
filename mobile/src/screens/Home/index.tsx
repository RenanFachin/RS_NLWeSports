import { View, Image, FlatList } from 'react-native';

// Importando o logo
import logoImg from '../../assets/logo-nlw-esports.png'

// Importação de componentes
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

// Importando a coleção de objetos
import { GAMES } from '../../utils/games';

// Importação dos styles desta página
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>

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
    data={GAMES}
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




    </View>
  );
}