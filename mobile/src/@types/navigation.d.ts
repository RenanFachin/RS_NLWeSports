export interface GameParams {
    id: string;
    title: string;
    bannerUrl: string;
}


export declare global {
    namespace ReactNavigation{
        interface RootParamList {
            // undefined = significa que a rota não necessita de nenhum parâmetro
            // O game necessita de 3 parâmetros
            home: undefined;
            game: GameParams
        }
    }
}