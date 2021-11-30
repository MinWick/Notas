import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'

const Notas = () => {

    const [palabra, setPalabra] = useState([''])
    const [text, setText] = useState<string>('');
    const [FNota, setFNota] = useState<string>('')
    const [SNota, setSNota] = useState<string>('')
    const [total, setTotal] = useState<string[]>([])

    const hasndleShow = () => {
        const texts: string[] = [text]
        const allText: string[] = [...palabra, ...texts]
        setPalabra(allText)

        const parcials = (parseFloat(FNota) + parseFloat(SNota))/2
        const Total: string[] = [parcials.toString()]
        const TTotal: string[] = [...total, ...Total]
        setTotal(TTotal)
    }
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <TextInput style={styles.Tinputs}
                placeholder='Nombre del estudiante'
                onChangeText={text => setText(text)}
            />
            <TextInput
                placeholder='IP'
                onChangeText={FNota => setFNota(FNota)}
            />
            <TextInput
                 placeholder='IIP'
                 onChangeText={SNota => setSNota(SNota)}
            />
            <View>
                <Text> 
                    { total }
                </Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={hasndleShow}
            >
                <Text>
                    Agregar
                </Text>
            </TouchableOpacity>
            {/* {
                palabra.map((lista, index) =>
                    <View style={styles.constainer}>
                        <Text key={index}>
                            {lista}
                        </Text>
                        <Text > Nota final:
                            {total[index]}
                        </Text>
                    </View>

                )
            } */
                palabra.map((estudiante, index) => (
                    <View style={styles.constainer}>
                        <Text key={index}>{index}{estudiante} </Text>
                        <Text>
                            Jarellys: {total[index]}
                        </Text>
                    </View>
                ))
            }

        </ScrollView>
    )
}

export default Notas
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
        paddingVertical: 2,
        paddingHorizontal: 2,
        borderRadius: 2,
        marginTop: 2
    },
    button: {
        paddingTop: 10,
        backgroundColor: "#C4C4C4",
        paddingLeft: 10,
        paddingRight: 10,
    },
    contentContainer: {
        paddingVertical: 20
    },


})
