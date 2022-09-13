import { View, Image } from 'react-native';

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

      <GameCard 
      data = {GAMES[0]}
      />

    </View>
  );
}