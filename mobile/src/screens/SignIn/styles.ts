import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 32,
  },
  // Estilização da imagem de logo
  logo:{
    width: 214,
    height: 120,
    marginTop: 74,
    marginBottom: 48,
  },
  // ContentList vai ser para deixar a lista com espaçamentos no inico e final
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
  },
  button: {
    width: '100%',
    height: 36,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTittle: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    marginLeft: 8,
  }
});