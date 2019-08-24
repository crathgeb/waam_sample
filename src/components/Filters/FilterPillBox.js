// @flow
import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import {Button} from "react-native-elements";

type Props = {
    title: string,
    type: 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8'
}

const types = {
    f1: ['#2CC7FD','#AD2DFF'],
    f2: ['#6018DC','#DF9B97'],
    f3: ['#736EFE','#61EAEB'],
    f4: ['#3813C2','#DC5FD4'],
    f5: ['#3C1FE9','#8AA7E6'],
    f6: ['#3015E8','#F9B1FF'],
    f7: ['#130CB7','#49C7E0'],
    f8: ['#B210FF','#E3AA3F'],
}

const FilterPillBox = (props: Props) => {
    const [isChecked, setIsChecked] = useState(false)

    const {type, title} = props
    return (
        <TouchableOpacity
            onPress={()=>{setIsChecked(!isChecked)}}
            style={styles.container}
        >
            {isChecked
                ? <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 0}}
                    colors={types[type]}
                    style={styles.pillBoxFull}
                >
                    <Text style={{color:"#fff"}}>{title}</Text>
                </LinearGradient>
                : <View style={styles.pillBoxEmpty}>
                    <Text style={{color:"#212121"}}>{title}</Text>
                </View>
            }

        </TouchableOpacity>
    )
}



export default FilterPillBox

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    pillBoxFull: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 30,
        borderWidth: 2
    },
    pillBoxEmpty: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 30,
        borderColor: '#212121',
        borderWidth: 2
    }
})