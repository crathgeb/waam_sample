import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FilterPillBox from "./FilterPillBox";

const FilterSet = () => {

    return <View style={styles.container}>
            <FilterPillBox type={'f1'} title={'too hard'} />
            <FilterPillBox type={'f2'} title={'too long'} />
            <FilterPillBox type={'f3'} title={'not my style'} />
            <FilterPillBox type={'f4'} title={'not what I expected'} />
            <FilterPillBox type={'f5'} title={'generic'} />
            <FilterPillBox type={'f6'} title={'boring'} />
            <FilterPillBox type={'f7'} title={'the trainer'} />
            <FilterPillBox type={'f8'} title={'felt discouraged'} />
            <FilterPillBox type={'f1'} title={'other'} />
    </View>
}



export default FilterSet

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
})