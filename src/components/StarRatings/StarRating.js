// @flow
import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StarButton from "./StarButton";

type Props = {
    onSetRating: (number) => any
}

const StarRating = (props: Props) => {
    const [rating, setRating] = useState(0)
    const stars = [1,2,3,4,5]

    return <View style={styles.container}>
        <View style={styles.starSet}>
            {
                stars.map((index) => (
                    <View style={styles.stars} key={index}>
                        <StarButton
                            onButtonPress={(index)=>{
                                setRating(index)
                                props.onSetRating(index)
                            }}
                            index={index}
                            isFilled={rating >= index}
                        />
                    </View>
                ))
            }
        </View>
        { rating === 1 ? <Text style={styles.ratingText}>terrible</Text> : null}
    </View>
}



export default StarRating

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    starSet: {
        flexDirection:'row',
        marginVertical: 20
    },
    stars: {
        marginHorizontal: 10
    },
    ratingText: {
        color: "#fff",
        marginBottom: 20
    }
})