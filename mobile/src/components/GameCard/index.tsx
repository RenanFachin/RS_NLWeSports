import { TouchableOpacity, TouchableOpacityProps, ImageBackground, Text } from 'react-native';
// TouchableOpacity torna a região clicável

import { styles } from './styles';

// Importando o linerGradiente da biblioteca instalada
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';

// Esta interface vai ser exportada para o local que o componente vai ter o seu uso
export interface GameCardProps {
    id: string;
    title: string;
    _count: {
      ads: number;
    }
    bannerUrl: string;
}

// Esta intercace é apenas para uso "interno" do componente GameCard
// Está extendendo o touchableOpacityProps
interface Props extends TouchableOpacityProps{
    data: GameCardProps
}

// ...rest é referente ao touchableOpacityProps
export function GameCard({data, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      
      {/* O imageBackground engloba tudo para que seja possível tudo ficar dentro da imagem da capa do jogo*/}
        <ImageBackground
        style={styles.cover}
        // recebendo as imagens de forma dinâmica
        // source espera um arquivo, para contornar isto, é necessário fazer {{uri: ....}}
        source={{uri: data.bannerUrl}}
        >

      {/* O linearGradient recebe algumas propriedades para gerar o gradiente */}
      <LinearGradient
      colors={THEME.COLORS.FOOTER}
      style={styles.footer}
      >

        <Text style={styles.name}>
          {data.title}
        </Text>

        <Text style={styles.ads}>
          {data._count.ads} anúncios
        </Text>

      </LinearGradient>

    </ImageBackground>


    </TouchableOpacity>
  );
}