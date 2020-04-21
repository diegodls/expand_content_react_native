import React, { Component } from 'react'
import { Text, View,StyleSheet ,Animated} from 'react-native'
import  {PanGestureHandler,PinchGestureHandler} from 'react-native-gesture-handler'
const tag ='[GESTURE]'
export default class WorkingExample extends Component {

 translateX = new Animated.Value(0)
 translateY = new Animated.Value(0)
 scale  = new Animated.Value(1)

   // handleGesture = Animated.event([{nativeEvent: {translationX: this.translateX,translationY:this.translateY,scale:this.scale}}], { useNativeDriver: true });
   handleGesture = Animated.event([{nativeEvent: {scale:this.scale}}], { useNativeDriver: true });
    _onGestureStateChange = (event)=>{
   console.log(tag,event.nativeEvent)
   this.scale.setValue(event.nativeEvent.scale)
    }
   
    render() {

        console.log(tag,this.scale)
        let circleTransformStyle 
        circleTransformStyle = {
                transform:[
                    {
                        translateY : this.translateY
                    },
                    {
                        translateX : this.translateX
                    }
                ]
            }

        let scaleStyle = {
            transform:[
                { perspective: 200 },
                {
                    scale :  this.scale
                }
            ]
        }
   
        return (
            <View style={[styles.container]} >
            <PinchGestureHandler onGestureEvent={this.handleGesture} onHandlerStateChange={this._onGestureStateChange}>
            <Animated.View style={[styles.circle,scaleStyle]} />
            </PinchGestureHandler>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
      backgroundColor: "#fff"
    },
    image:{
        width:250,
        height: 250 
    },
    circle: {
        width: 150,
        height: 150,
        alignSelf:'center',
        backgroundColor: "#c00000",
        borderRadius: 100
      },
    title:{
        fontSize:20,
        textAlign:"center"
    },
    separator: {
      width: "100%",
      height: 1,
      backgroundColor: "#ccc"
    },
    leftItem: {
      flex: 1,
      backgroundColor: "#76a21e",
      justifyContent: "center"
    }})