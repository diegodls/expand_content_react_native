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

import IconFA from 'react-native-vector-icons/FontAwesome'

const BACKGROUND_COLOR = '#f8eeee';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


const Card = (props) => {

    const [item, setItem] = useState(props)
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
            <View style={[styles.boxOut, { height: boxHeight, }]}>
                <TouchableWithoutFeedback onPress={() => seeMore()}>
                    <View style={styles.boxBar}>
                        <Text style={styles.boxBarTitle}>{item.id} - {item.name}</Text>
                        <View style={styles.boxBarIconContainer} >
                            <IconFA name="chevron-down" size={20} style={styles.boxBarIcon} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.conteudoContainer}>
                    <Text style={styles.conteudoText}>{item.description}</Text>
                </View>
            </View>

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
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10
    },
    boxBarTitle: {
        color: '#f8f8f8',
        fontSize: 18,
        fontWeight: 'bold',

    },
    boxBarIconContainer: {
        width: 30,
        height: 30,
        borderRadius: 25,
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
    },
    conteudoText: {
        color: '#363636',
        fontWeight: 'bold',
        fontSize: 16,
    },
})

export default Card;