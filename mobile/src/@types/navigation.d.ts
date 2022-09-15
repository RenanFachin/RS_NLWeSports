export declare global {
    namespace ReactNavigation{
        interface RootParamList {
            // undefined = significa que a rota não necessita de nenhum parâmetro
            // O game necessita de 3 parâmetros
            home: undefined;
            game: {
                id: string;
                title: string;
                bannerUrl: string;
            }
        }
    }
}