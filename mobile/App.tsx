// Importação 
import { StatusBar } from 'react-native'

// Importação do componente Background
import { Background } from './src/components/Background';

export default function App() {
  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        // fazendo os dados da statusbar sobrepor
        translucent
      />
      
    </Background>
  );
}

