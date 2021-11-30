import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'


interface Props{
    title:string;
    defaultValue:string;
    onChangeText:(text: string) => void;
}
const Gnotas = ({title, defaultValue, onChangeText}:Props) => {

    return (
        <View>
             <View>
             <Text>{title}</Text>
            <TextInput
                style={styles.Tinputs}
                placeholder={defaultValue}
                onChangeText={text => onChangeText(text)}
            />
        </View>
        </View>
    )
}

export default Gnotas

const styles = StyleSheet.create({
    Tinputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 5,
        fontSize: 22,
        color: '#034C50',
        alignItems: 'flex-start',

    },
    constainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
        paddingVertical: 2,
        paddingHorizontal: 2,
        borderRadius: 2,
        marginTop: 2
    },
    button: {
        paddingTop: 25,
        backgroundColor: "#05786A",
        paddingLeft: 100,
        paddingRight: 100,
        alignItems:'center'
    }

})
