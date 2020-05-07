import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import Card from './Card'

const BACKGROUND_COLOR = '#f8eeee';

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

]

const App = () => {
  const [boxHeight, setBoxHeight] = useState(50);

  function seeMore() {
    if (boxHeight <= 50) {
      setBoxHeight(200);
    } else {
      setBoxHeight(50);
    }

  }

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={BACKGROUND_COLOR} />
      <SafeAreaView style={styles.container}>
        {obj.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    //justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  }
})

export default App;