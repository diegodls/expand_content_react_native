import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,

} from 'react-native';

import IconFA from 'react-native-vector-icons/FontAwesome'
import Animated, { useCode, Easing, interpolate } from 'react-native-reanimated';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const barHeight = 50;

const CardWithAnimation = (props) => {

    const [item] = useState(props);

    const boxHeightRef = useRef(new Animated.Value(50)).current;
    const [open, setOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState(null);
    const [minHeight, setMinHeight] = useState(null);

    

    function seeMore() {
        console.log(open ? `${open} - Fechando` : `${open} - Abrindo`)

        let toValue = open ? minHeight : maxHeight;
        console.log(`minHeight: ${minHeight}`);
        console.log(`maxHeight : ${maxHeight}`);

        Animated.timing(boxHeightRef, {
            toValue: toValue,
            duration: 200,
            easing: Easing.linear,
            //easing: Easing.elastic(2),
            useNativeDriver: true
        }).start(setOpen(!open))


    }

    function log() {
        console.log('\n')
        console.log('============> LOG');
    }

    function _setMaxHeight(event) {
        event.nativeEvent.layout.height > maxHeight ? setMaxHeight(event.nativeEvent.layout.height) : setMaxHeight(maxHeight);
        console.log(`${item.id} - (F)setMaxHeight: ${event.nativeEvent.layout.height}`);
    }

    function _setMinHeight(event) {
        setMinHeight(event.nativeEvent.layout.height);
        console.log(`${item.id} - (F)setMinHeight: ${event.nativeEvent.layout.height}`);
    }

    //useCode(() => { }, []);

    return (
        <Animated.View
            style={[styles.boxOut, { height: boxHeightRef }]}
            onLayout={(event) => _setMaxHeight(event)} 
            >
            <TouchableWithoutFeedback onPress={seeMore}>
                <View
                    style={styles.boxBar}
                    onLayout={(event) => _setMinHeight(event)} >
                    <Text style={styles.boxBarTitle}>{item.id} - {item.name}</Text>
                    <View style={styles.boxBarIconContainer} >
                        <IconFA name="chevron-down" size={20} style={styles.boxBarIcon} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.conteudoContainer}>
                <Text style={styles.conteudoText}>{item.description}</Text>
            </View>
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    boxOut: {
        flexWrap: "wrap",
        flexDirection: "row",
        backgroundColor: '#FC0',
        width: SCREEN_WIDTH - 50,
        marginBottom: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 1,
        borderRadius: 4,
    },
    boxBar: {
        backgroundColor: '#dc2f2f',
        width: '100%',
        height: barHeight,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    boxBarTitle: {
        color: '#f8f8f8',
        fontSize: 18,
        fontWeight: 'bold',

    },
    boxBarIconContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxBarIcon: {
        color: '#dc2f2f',
    },
    conteudoContainer: {
        padding: 10,
        flex: 1,
        overflow: 'hidden',
        backgroundColor: '#CF0'
    },
    conteudoText: {
        color: '#363636',
        fontWeight: 'bold',
        fontSize: 16,
    },
    logContainer: {
        backgroundColor: '#F0C',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        alignSelf: 'flex-start'
    },
    logText: {
        color: '#f8f8f8',
        fontWeight: 'bold',
        fontSize: 16,
        textAlignVertical: 'center',
    },
})

export default CardWithAnimation;