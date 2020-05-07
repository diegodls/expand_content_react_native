import React, { useState, useRef,  } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';

import IconFA from 'react-native-vector-icons/FontAwesome'
import Animated, { Easing, interpolate, Value} from 'react-native-reanimated';
import { State, TapGestureHandler } from 'react-native-gesture-handler';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const barHeight = 50;

const CardWithAnimation = (props) => {

    const [item] = useState(props);
    const boxHeightRef = useRef(new Value(0)).current;
    const [open, setOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);

    const boxHeight = boxHeightRef.interpolate({
        inputRange: [0, 1],
        outputRange: [0, maxHeight]
    })
    const rotate = boxHeightRef.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 3.14],
    })

    function _setMaxHeight(event) { //função para pegar o tamanho total do componente
        event.nativeEvent.layout.height > maxHeight ? setMaxHeight(event.nativeEvent.layout.height) : setMaxHeight(maxHeight);       
    }

    function tapGestureHandler(event) {
        if (event.nativeEvent.state === State.ACTIVE) {            
            let isMaxHeightHigh = maxHeight > 1000 ? maxHeight / 2 : maxHeight;
            let toValue = open ? 0 : 1;
            let duration = isMaxHeightHigh;
            Animated.timing(boxHeightRef, {
                toValue: toValue,
                duration: duration,
                useNativeDriver: true,
                easing: Easing.linear,
            }).start(setOpen(!open))
        }
    }

    return (
        <>

            <Animated.View style={[styles.boxOut]}>
                <TapGestureHandler
                    onHandlerStateChange={event => tapGestureHandler(event)}
                >
                    <View style={styles.boxBar}                >
                        <Text style={styles.boxBarTitle}>{item.id} - {item.name}</Text>
                        <Animated.View
                            style={[styles.boxBarIconContainer,
                            {
                                transform: [{ rotate: rotate }]
                            }
                            ]} >
                            <IconFA name="chevron-down" size={20} style={styles.boxBarIcon} />
                        </Animated.View>
                    </View>
                </TapGestureHandler>
                <Animated.View
                    style={{ overflow: 'hidden', width: '100%', height: boxHeight }}
                    onLayout={(event) => _setMaxHeight(event)}
                >
                    <View style={styles.conteudoContainer}>
                        <Text style={styles.conteudoText}>{item.description}</Text>
                    </View>
                </Animated.View>
            </Animated.View >
        </>
    )
};


const styles = StyleSheet.create({
    boxOut: {
        flexWrap: "wrap",
        flexDirection: "row",
        backgroundColor: '#f8f8f8',
        width: SCREEN_WIDTH - 50,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
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
        borderRadius: 4,
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