import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView
} from 'react-native';

import CardWithAnimation from './CardWithAnimation';
import {items} from '../obj/items'

const BACKGROUND_COLOR = '#FFF';

const App = () => {

 const obj = items;

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={BACKGROUND_COLOR} />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollview}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}
        >
          {obj.map((item) => (
            <CardWithAnimation {...item} key={item.id} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
  },
  scrollview: {
    paddingTop: 10,
    width: '100%'
  },
})

export default App;