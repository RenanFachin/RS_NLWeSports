// Importando Componentes
import { View, Text, ColorValue } from 'react-native';

// Importando regras de estilo
import { THEME } from '../../theme';
import { styles } from './styles';

// Criando tipagem para definir o que poderá ser recebido como parâmetro deste componente
interface Props {
    label: string;
    value: string;
    colorValue?: ColorValue;
}

// Definindo a cor padrão para o colorValue. Este será o valor default caso não seja definido novamente
export function DuoInfo({label, value, colorValue = THEME.COLORS.TEXT }: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>
            {label}
        </Text>

        {/* OBS: No reactNative é possível passar mais de uma regra de estilo para os componentes */}
        <Text style={[styles.value, {color: colorValue}]}>
            {value}
        </Text>
    </View>
  );
}