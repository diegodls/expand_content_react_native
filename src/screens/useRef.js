import React, { useState, useRef } from 'react'
import {
    View, Button, Animated, Easing,
} from 'react-native'

export default function Component() {
    const [opened, setOpened] = useState(false)

    const animatedValue = new Animated.Value(0)
    const animatedRef = useRef(animatedValue)

    const translateX = animatedRef.current.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 200],
    })


    function showSearchWithUseState() {
        Animated.timing(animatedRef.current, {
            toValue: 1,
            duration: 150,
            easing: Easing.elastic(2),
            useNativeDriver: true

        }).start(() => {
            setOpened(true)
        })
    }

    function hideSearchWithUseState() {
        Animated.timing(animatedRef.current, {
            toValue: 0,
            duration: 100,
            easing: Easing.elastic(2),
            useNativeDriver: true
        }).start(() => {
            setOpened(false)
        })
    }

    return (
        <View style={{ height: 400 }}>
            {!opened ? (
                <Button title="Show with useState" onPress={showSearchWithUseState} />
            ) : (
                    <Button title="Hide with useState" onPress={hideSearchWithUseState} />
                )}
            <Animated.View
                style={{
                    height: 80,
                    width: 80,
                    backgroundColor: '#000',
                    transform: [{ translateX }],
                }}
            />
        </View>
    )
}