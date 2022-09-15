import { Inter_200ExtraLight, Inter_400Regular } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    // flex 1 para ocupar tudo e alignItems para deixar tudo ao centro
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    // com o spaceBetween ele joga cada elemento para um lado oposto da tela
    justifyContent: 'space-between'
  },
  logo: {
    // No reactNative não precisa de unidades de medida. O proprio react native vai calcular de acordo com a densidade de pixel de cada aparelho
    width: 72,
    height: 40,
  },
  right:{
    // Aqui vão as mesmas medidas do ícone para garantir que vai ficar centralizado o logo
    width: 20,
    height: 20,
  },
  cover: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32, 
  },
  containerList: {
    width: '100%',
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start'
  },
  emptyListText: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },
  emptyListContent: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center',

  }
});