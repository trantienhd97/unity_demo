/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Text,
  NativeModules,
  Platform,
} from 'react-native';

const App = () => {
  const handleOpenUnityDemo = React.useCallback(() => {
    if (Platform.OS === 'android') {
      NativeModules.UnityContainer.createEvent();
    } else {
      NativeModules.IOTContainer.ShowMessage('Test', 0.5);
    }
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.header}>
            App demo tích hợp unity vào React native
          </Text>
        </View>
        <View style={styles.viewBTN}>
          <Button title={'Turn On'} onPress={handleOpenUnityDemo} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bbf1fa',
    height: '20%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: '300',
    color: '#1a508b',
  },
  viewBTN: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
