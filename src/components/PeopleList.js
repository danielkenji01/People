import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {

    const { peoples, onPressItem } = props;
    /*
    const textElements = peoples.map(people => {
        const {first} = people.name;
        return (
            <View key={first} style={styles.line}>
                <Text styte={styles.lineText}>{first}</Text>
            </View>
        )
    }); */

    const items = peoples.map(people => 
        <PeopleListItem 
            key={people.name.first} 
            people={people} 
            navigateToPeopleDetail={onPressItem}
        />
    );

    return (
        /** <ScrollView style={styles.container}>
            {items}
        </ScrollView> **/
        <FlatList 
            style={styles.container}
            data={peoples}
            renderItem={({item}) => (
                <PeopleListItem 
                    people={item} 
                    navigateToPeopleDetail={onPressItem}
                />
            )}
            keyExtractor={item => item.name.first}   
        />
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})

export default PeopleList;