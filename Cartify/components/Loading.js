import React from 'react';
import {View, Text, Image} from 'react-native';

import Styles from '../styles/styles.js';
import icon from '../assets/icon.png';

const Loading = () => {
  return (
    <View style={Styles.containerCenter}>
      <View style={Styles.contentAlign}>
        <Text style={[Styles.textSuperBig, Styles.textColorPurple]}>
          Loading...
        </Text>
        {/* <View>
          <Image source={icon} style={{width: 50, height: 50}} />
        </View> */}
      </View>
    </View>
  );
};

export default Loading;
