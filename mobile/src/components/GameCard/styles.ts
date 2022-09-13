import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginRight: 24, // para os cartões não ficar "grudados"
  },
//   Criando uma folha de estilos para a capa do jogo
  cover:{
    width: 240,
    height: 320,
    justifyContent: 'flex-end', // flex-end para alinhar o texto na parte debaixo do cartão
    borderRadius: 8,
    overflow: 'hidden', // overflow hidden é para que seja mantida a estilização de bordas, é adicionado esta propriedade para garantir que não será ultrapassado os limites
  },
//   Criando uma folha de estilos para o footer do card
  footer:{
    width: '100%',
    height: 120,
    padding: 16,
    justifyContent: 'flex-end'
  },
//   Criando uma folha de estilos para o nome do jogo
  name:{
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
//   Criando uma folha de estilos para os anúncios do jogo
  ads:{
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});