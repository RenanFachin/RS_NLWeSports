import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
    // Pega tudo que a viewProps tem de propriedades
    title: string; // para deixar dinâmico a mudança do title
    subtitle: string; // para deixar dinâmico a mudança do subtitle
}

// É possível deixar o title e o subtitle de forma explicíta
// ...rest são todas as outras propriedades que o componente pode vir a ter
export function Heading({title, subtitle, ...rest}: Props) {
  return (
    <View style={styles.container} {...rest}>

        <Text style={styles.title}>
            {title}
        </Text>

        <Text style={styles.subtitle}>
            {subtitle}
        </Text>

    </View>
  );
}