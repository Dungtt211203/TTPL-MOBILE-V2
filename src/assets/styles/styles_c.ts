import { StyleSheet, Dimensions, Platform } from 'react-native';
import sizes from './sizes';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles_c = StyleSheet.create({
  box_shadow: {
    backgroundColor: '#ffffff',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowOffset: { width: 0.2, height: 0.2 },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizes._20sdp,
    borderBottomWidth: 1,
    borderColor: '#F1F1F1',
    paddingVertical: Platform.OS == 'ios' ? 0 : sizes._10sdp,
    paddingBottom: sizes._10sdp,
  },
  row_start: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  row_beetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row_center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row_end: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  row_around: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  border_bottom: {
    borderBottomWidth: 1,
    borderColor: '#F1F1F1',
  },
  font_text: {
    fontSize: sizes._12sdp,
    fontWeight: '400',
    color: '#2D2D2D',
  },
  font_text_6_400: {
    fontSize: sizes._6sdp,
    fontWeight: '400',
    color: '#2D2D2D',
  },
  font_text_6_600: {
    fontSize: sizes._6sdp,
    fontWeight: Platform.OS == 'ios' ? '600' : '700',
    color: '#2D2D2D',
  },
  font_text_8_400: {
    fontSize: sizes._8sdp,
    fontWeight: '400',
    color: '#2D2D2D',
  },
  font_text_8_600: {
    fontSize: sizes._8sdp,
    fontWeight: Platform.OS == 'ios' ? '600' : '700',
    color: '#2D2D2D',
  },
  font_text_10_400: {
    fontSize: sizes._10sdp,
    fontWeight: '400',
    color: '#2D2D2D',
  },
  font_text_10_600: {
    fontSize: sizes._10sdp,
    fontWeight: Platform.OS == 'ios' ? '600' : '700',
    color: '#2D2D2D',
  },
  font_text_12_400: {
    fontSize: sizes._12sdp,
    fontWeight: '400',
    color: '#2D2D2D',
  },
  font_text_12_600: {
    fontSize: sizes._12sdp,
    fontWeight: Platform.OS == 'ios' ? '600' : '700',
    color: '#2D2D2D',
  },
  font_text_14_400: {
    fontSize: sizes._14sdp,
    fontWeight: '400',
    color: '#2D2D2D',
  },
  font_text_14_600: {
    fontSize: sizes._14sdp,
    fontWeight: Platform.OS == 'ios' ? '600' : '700',
    color: '#2D2D2D',
  },
  font_text_16_400: {
    fontSize: sizes._16sdp,
    fontWeight: '400',
    color: '#2D2D2D',
  },
  font_text_16_600: {
    fontSize: sizes._16sdp,
    fontWeight: Platform.OS == 'ios' ? '600' : '700',
    color: '#2D2D2D',
    paddingVertical: sizes._6sdp,
  },
  font_text_18_400: {
    fontSize: sizes._18sdp,
    fontWeight: '400',
    color: '#2D2D2D',
  },
  font_text_18_600: {
    fontSize: sizes._18sdp,
    fontWeight: Platform.OS == 'ios' ? '600' : '700',
    color: '#2D2D2D',
    paddingVertical: sizes._6sdp,
  },
  font_text_20_400: {
    fontSize: sizes._20sdp,
    fontWeight: '400',
    color: '#2D2D2D',
  },
  font_text_20_600: {
    fontSize: sizes._20sdp,
    fontWeight: Platform.OS == 'ios' ? '600' : '700',
    color: '#2D2D2D',
    paddingVertical: sizes._6sdp,
  },
  font_text_22_400: {
    fontSize: sizes._22sdp,
    fontWeight: '400',
    color: '#2D2D2D',
  },
  font_text_22_600: {
    fontSize: sizes._22sdp,
    fontWeight: Platform.OS == 'ios' ? '600' : '700',
    color: '#2D2D2D',
    paddingVertical: sizes._6sdp,
  },
});
export default styles_c;
