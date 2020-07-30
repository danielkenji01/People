import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PeopleListItem = props => {
    const { people, navigateToPeopleDetail } = props;
    const { first, last } = people.name;
    const { thumbnail } = people.picture;
    return (
        <TouchableOpacity onPress={() => {
                console.log('Clicou em mim!! ', first)
                navigateToPeopleDetail({ people });
            }}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: thumbnail }}/>
                <Text style={styles.lineText}>
                    {`${first} ${last}`}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',

        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1, // Não redimensionamento da imagem
        //width: 40,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    }
});

export default PeopleListItem;