import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView
} from 'react-native';
import Card from './Card'
import { items } from '../obj/items'


const BACKGROUND_COLOR = '#f8eeee';
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
          {obj.map((item, index) => (
            <Card {...{ item }} key={index} />
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
    paddingTop: 10,
  },
  scrollview: {
    paddingTop: 10,
    width: '100%'
  },
})

export default App;