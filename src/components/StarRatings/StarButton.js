// @flow
import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import {Image} from "react-native-elements";

const starFullImage = require('../../../resources/images/star_full.png')
const starEmptyImage = require('../../../resources/images/star_empty.png')

type Props = {
    index: number,
    onButtonPress: (number) => any,
    isFilled: boolean
}

const StarButton = (props: Props) => {
    const {index, isFilled} = props

    return (
        <TouchableOpacity onPress={()=>{ props.onButtonPress(index)}}>
            <Image
                source={isFilled ? starFullImage : starEmptyImage}
                style={styles.image}
            />
        </TouchableOpacity>
    )
}

export default StarButton

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30
    },
})