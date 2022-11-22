import {StyleSheet} from 'react-native';

const textColor = '#0D0E26';
const spacing10 = 10;
const spacing20 = 20;
const spacing30 = 30;

export default StyleSheet.create({
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  containerUncenter: {
    flex: 1,
    height: '100%',
  },

  containerFlex: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  containerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(174, 174, 174, 0.5);',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },

  contentCenter: {
    flew: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentAlign: {
    flexDirection: 'row',
  },
  textSmall: {
    color: '#2F2F2F',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.52,
  },

  textNormal: {
    color: textColor,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.36,
  },

  textBig: {
    color: textColor,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 29.05,
  },

  textSuperBig: {
    color: textColor,
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 35,
  },

  textColorWhite: {color: '#fff'},
  textColorBlack: {color: '#000'},
  textColorRed: {color: '#EA6565'},
  textColorPurple: {color: '#656ACC'},

  bgColorBlack: {backgroundColor: '#000'},
  bgColorWhite: {backgroundColor: '#fff'},
  bgColorRed: {backgroundColor: '#F5B2B2'},
  bgColorLightPurple: {backgroundColor: '#D9DAF2'},
  bgColorPurple: {backgroundColor: '#656ACC'},

  marginTop10: {marginTop: spacing10},
  marginBottom10: {marginBottom: spacing10},
  marginVertical10: {marginVertical: spacing10},

  marginLeft10: {marginLeft: spacing10},
  marginRight10: {marginRight: spacing10},
  marginHorizontal10: {marginHorizontal: spacing10},

  marginAll10: {margin: spacing10},

  marginTop20: {marginTop: spacing20},
  marginBottom20: {marginBottom: spacing20},
  marginVertical20: {marginVertical: spacing20},

  marginLeft20: {marginLeft: spacing20},
  marginRight20: {marginRight: spacing20},
  marginHorizontal20: {marginHorizontal: spacing20},

  marginAll20: {margin: spacing20},

  marginTop30: {marginTop: spacing30},
  marginBottom30: {marginBottom: spacing30},
  marginVertical30: {marginVertical: spacing30},

  marginLeft30: {marginLeft: spacing30},
  marginRight30: {marginRight: spacing30},
  marginHorizontal30: {marginHorizontal: spacing30},

  marginAll30: {margin: spacing30},

  paddingTop10: {paddingTop: spacing10},
  paddingBottom10: {paddingBottom: spacing10},
  paddingVertical10: {paddingVertical: spacing10},

  paddingLeft10: {paddingLeft: spacing10},
  paddingRight10: {paddingRight: spacing10},
  paddingHorizontal10: {paddingHorizontal: spacing10},

  paddingAll10: {padding: spacing10},

  paddingTop20: {paddingTop: spacing20},
  paddingBottom20: {paddingBottom: spacing20},
  paddingVertical20: {paddingVertical: spacing20},

  paddingLeft20: {paddingLeft: spacing20},
  paddingRight20: {paddingRight: spacing20},
  paddingHorizontal20: {paddingHorizontal: spacing20},

  paddingAll20: {padding: spacing20},

  paddingTop30: {paddingTop: spacing30},
  paddingBottom30: {paddingBottom: spacing30},
  paddingVertical30: {paddingVertical: spacing30},

  paddingLeft30: {paddingLeft: spacing30},
  paddingRight30: {paddingRight: spacing30},
  paddingHorizontal30: {paddingHorizontal: spacing30},

  paddingAll30: {padding: spacing30},

  width25: {width: '25%'},
  width50: {width: '50%'},
  width75: {width: '75%'},
  width100: {width: '100%'},

  height25: {height: '25%'},
  height50: {height: '50%'},
  height75: {height: '75%'},
  height100: {height: '100%'},

  componentRect: {
    borderRadius: 10,
    marginTop: 15,
    flexWrap: 'wrap',
  },

  subDetails: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'column',
  },
  counter: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },

  counterButton: {padding: 2, borderRadius: 5},

  counterButtonNegative: {
    padding: 2,
    borderRadius: 5,
    color: '#fff',
    borderColor: '#656ACC',
    borderWidth: 1,
  },
  counterButtonPositive: {
    padding: 2,
    borderRadius: 5,
    backgroundColor: '#656ACC',
    color: '#fff',
  },

  contentCloseButton: {
    position: 'absolute',
    right: -7.5,
    top: -7.5,
    backgroundColor: '#F5B2B2',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    zIndex: 1,
  },

  contentButton: {
    width: 100,
    height: 30,
    borderRadius: 10,
  },

  summary: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    marginBottom: -10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  checkout: {
    position: 'absolute',
    height: 30,
    top: 24,
    right: 24,
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 4,
  },
  floatingButton: {
    position: 'absolute',
    top: -64,
    right: 12,
    backgroundColor: '#fff',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 40,
    elevation: 3,
  },
  nav: {
    backgroundColor: '#656ACC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  noticeBox: {
    width: '70%',
    height: '25%',
    borderRadius: 10,
  },

  returnButton: {
    flexDirection: 'row-reverse',
    paddingTop: 30,
    paddingHorizontal: 30,
  },

  identifyBorder: {borderWidth: 1},

  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  // Camera styles
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
