// Importações de "componentes nativos" do react-native
import { StatusBar } from 'react-native'

// Importações personalizadas (fonts)
import { 
  useFonts, 
  Inter_400Regular,
  Inter_600SemiBold, 
  Inter_700Bold,
  Inter_900Black
 } from '@expo-google-fonts/inter'

import { Subscription } from 'expo-modules-core'

// Importação do componente Background
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';

// Importando as rotas
import { Routes } from './src/routes';

// Importando SERVICES
import './src/services/notificationConfigs'
import { getPushNotificationToken } from './src/services/getPushNotificationToken'

import { useRef, useEffect } from 'react' // o useRef é para manipular de forma direta a dom virtual do react

import * as Notifications from 'expo-notifications'


export default function App() {
  // useFonts é o responsável pelo carregamento das fontes
  // fontsLoaded é uma constante criada para GARANTIR que as fontes tenham já sido inicializadas
  // fontsLoaded é do tipo booleano
  const [fontsLoaded] = useFonts({  
    Inter_400Regular,
    Inter_600SemiBold, 
    Inter_700Bold,
    Inter_900Black
  });


  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(()=> {
  // O use Effect vai buscar pelo token da aplicação
  // vai dar um erro e vai pedir para estar logado no expo
  // Desta forma, será necessário digitar expo login no terminal
  getPushNotificationToken();
  })

  useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification)
    });

    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response)
    });

    return () => {
      if(getNotificationListener.current && responseNotificationListener.current){
        Notifications.removeNotificationSubscription(getNotificationListener.current)
        Notifications.removeNotificationSubscription(responseNotificationListener.current)
      }
    }
  },[])


  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        // fazendo os dados da statusbar sobrepor
        translucent
      />

      {/* Verificando se as fontes já foram inicializadas */}
      {/* Se a fonte já foi carregada = exibir a página HOME */}
      {/* Caso contrário, mostrar um componente de LOADING */}
      { fontsLoaded ? <Routes /> : <Loading />}
      
    </Background>
  );
}

