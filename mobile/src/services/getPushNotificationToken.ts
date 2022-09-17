import * as Notifications from 'expo-notifications'

export async function getPushNotificationToken(){
    // Acessando as permissões para saber se o usuário autorizou o dispositivo a receber notificações
    // granted é a autorização
    const { granted } = await Notifications.getPermissionsAsync();

    // se o dispositivo não tiver a autorização
    if (!granted){
        // Solicitando permissões
        await Notifications.requestPermissionsAsync();
    }


    // Caso o usuário tenha dado a autorização
    if(granted) {
        const pushToken = await Notifications.getExpoPushTokenAsync();
        console.log('NOTIFICATION TOKEN =>', pushToken.data);

        return pushToken.data
    }
}