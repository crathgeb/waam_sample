// @flow
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

type Props = {
    title: string,
}

const SecondaryButton = (props: Props) => {

    const {title} = props
    return (
        <TouchableOpacity
            onPress={()=>{alert('Give Compliment')}}
            style={styles.container}
        >
            <View style={styles.complementButton}>
                <Text style={{color:"#fff"}}>{title}</Text>
            </View>


        </TouchableOpacity>
    )
}



export default SecondaryButton

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    complementButton: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 30,
        borderColor: '#fff',
        borderWidth: 2
    }
})