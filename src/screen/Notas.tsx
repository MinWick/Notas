import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const Notas = () => {

const [palabra, setPalabra] = React.useState([''])
const [text, setText] = React.useState<string>('');
const [FNota, setFNota] = React.useState(0)
const [SNota, setSNota] = React.useState(0)

const hasndleShow = () => {
    const newuser: string[] = [text]
    const users = [...palabra, ...newuser]
    setPalabra(users)
} 
    return (
        <View>
        <TextInput style={styles.Tinputs}
            placeholder='Estriba aquui'
            onChangeText={ text => setText(text)}
        />
        <TouchableOpacity
        style={styles.button}
            onPress={hasndleShow}
        >
            <Text>
                here
            </Text>
        </TouchableOpacity>

        {
                    palabra.map((item, index) => 
                    <View style={styles.constainer}>
                        <Text key={index}>
                        {item}
                        </Text>
                    </View>

                    )
                }
        </View>
    )
}

export default Notas
const styles = StyleSheet.create({
    Tinputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 15,
        fontSize: 22,
        color: '#034C50',
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
