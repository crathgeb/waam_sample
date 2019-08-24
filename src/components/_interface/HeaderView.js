// @flow
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import {Button} from "react-native-elements";

type Props = {
    title: string
}

const WorkoutRatingScene = (props: Props) => {
    return (
        <LinearGradient start={{x: 0, y: 1}}
                        end={{x: 1, y: 0}}
                        colors={['#3c8ce7', '#00eaff']}
                        style={styles.linearGradient} >
            <Text style={styles.titleText}>
                {props.title}
            </Text>
            <Button
                type={'clear'}
                title={'Done'}
                containerStyle={styles.doneButton}
                titleStyle={styles.buttonText}
                onPress={()=>alert('Done Pressed!')}
            />
        </LinearGradient>
    )
}

export default WorkoutRatingScene

const styles = StyleSheet.create({
    linearGradient: {
        width: "100%",
        height: 80,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 30
    },
    titleText: {
        color: "#fff"
    },
    doneButton: {
        position: 'absolute',
        right: 5,
        top: 5
    },
    buttonText: {
        color: "#fff",
        fontWeight: 'normal'
    }
})