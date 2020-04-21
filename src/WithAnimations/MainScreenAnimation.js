import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Alert,
  ScrollView
} from 'react-native';


import CardWithAnimation from './CardWithAnimation'

const obj = [
  {
    id: 1,
    name: 'Qualquer coisa',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. '
  },
  {
    id: 2,
    name: 'Qualquer coisa',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.'
  },
  {
    id: 3,
    name: 'Qualquer coisa',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.'
  },
  {
    id: 4,
    name: 'Qualquer coisa',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. '
  },
  {
    id: 5,
    name: 'Qualquer coisa',
    description: 'Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta. Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.'
  },

]

const BACKGROUND_COLOR = '#f8eeee';

const App = () => {

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={BACKGROUND_COLOR} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {obj.map((item, index) => (
            <CardWithAnimation {...item} key={index} />
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
    paddingTop: 100,
  }
})

export default App;