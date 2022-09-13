import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType } from 'react-native';
// TouchableOpacity torna a região clicável

import { styles } from './styles';

// Esta interface vai ser exportada para o local que o componente vai ter o seu uso
export interface GameCardProps {
    id: string;
    name: string;
    ads: string;
    cover: ImageSourcePropType;
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
        <ImageBackground
        style={styles.cover}
        // recebendo as imagens de forma dinâmica
        source={data.cover}
        />


    </TouchableOpacity>
  );
}