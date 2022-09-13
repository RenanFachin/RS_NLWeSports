import React from 'react';
import { View, Image } from 'react-native';

// Importando o logo
import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>

      <Image 
        source={logoImg}
        // style é para definir de onde ele vai trazer as infos de estilização
        style={styles.logo}
      />

    </View>
  );
}