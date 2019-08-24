import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Avatar, Button} from "react-native-elements";
import HeaderView from "./_interface/HeaderView";
import StarRating from "./StarRatings/StarRating";
import FilterSet from "./Filters/FilterSet";
import SecondaryButton from "./_interface/SecondaryButton";

const WorkoutRatingScene = () => {
    const [rating, setRating] = useState(0)

    return <View style={styles.background}>
        <HeaderView title={"Your workout was logged"} />

        <Text style={styles.text}>How was your class with Steph?</Text>
        <Avatar
            size={120}
            rounded
            source={{
                uri:
                    'https://i.pravatar.cc/300?u=2304982309802664984',
            }}
        />
        <StarRating onSetRating={(value)=>setRating(value)}/>

        { rating === 1 ? <FilterSet/> : null }
        { rating === 5 ? <SecondaryButton title={'give a compliment'}/> : null }

        <View style={styles.submitButtonContainer}>
            <Button
                title={'Submit'}
                disabled={rating === 0}
                buttonStyle={styles.submitButton}
                titleStyle={{color: "#000"}}
                onPress={()=>alert('Submit')}
            />
        </View>
    </View>
}



export default WorkoutRatingScene

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#000",
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Roboto',
        color: "#fff",
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 20,
        paddingVertical: 20,
        paddingHorizontal: 80,
    },
    submitButtonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 20
    },
    submitButton:{
        borderRadius: 15,
        height: 50,
        paddingVertical: 15,
        paddingHorizontal: 40,
        backgroundColor: "#fff"
    }
})