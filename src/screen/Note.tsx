import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'

const Note = () => {

    const [palabra, setPalabra] = useState<string[]>([])
    const [text, setText] = useState<string>('');
    const [FNota, setFNota] = useState<string>('')
    const [SNota, setSNota] = useState<string>('')
    const [total, setTotal] = useState<string[]>([])

    const hasndleShow = () => {
        const texts: string[] = [text]
        const allText: string[] = [...palabra, ...texts]
        setPalabra([...palabra,text])

        const parcials = (parseFloat(FNota) + parseFloat(SNota))/2
        const Total: string[] = [parcials.toString()]
        const TTotal: string[] = [...total, ...Total]
        setTotal([...total,parcials.toString()])
    }
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <TextInput style={styles.input}
                placeholder='Nombre del estudiante'
                onChangeText={text => setText(text)}
            />
            <TextInput style={styles.input}
                placeholder='IP'
                onChangeText={FNota => setFNota(FNota)}
            />
            <TextInput style={styles.input}
                 placeholder='IIP'
                 onChangeText={SNota => setSNota(SNota)}
            />
            <View>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={hasndleShow}
            >
                <Text>
                    Agregar
                </Text>
            </TouchableOpacity>
            {
                palabra.map((estudiante, index) => (
                    <View style={styles.lista}>
                        <Text key={index}> {estudiante} </Text>
                        <Text style={[
                                      total[index] < '60' ? styles.textReprobed : null,
                                      total[index] > '59' ? styles.textAprobado : null
                    ]}> 
                           Nota Final {total[index]}
                        </Text>
                    </View>
                ))
            }

        </ScrollView>
    )
}

export default Note

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flex: 1,
        //borderWidth: 1,
    },
    datosEntrada: {},
    inputSection: {},
    input: {
        marginTop: 10,
        borderWidth: 1,
        paddingVertical: 18,
        paddingHorizontal: 130,
        paddingStart: 10,
        borderRadius: 6,
    },
    parciales: {
        paddingTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputPaciales: {
        width: 40,
        borderWidth: 1,
        textAlign: 'center',
        paddingVertical: 15,
    },
    button: {
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop: 17,
        justifyContent: 'center',
        backgroundColor: '#C4C4C4',
    },
    listaSection: {
        paddingHorizontal: 7,
        marginTop: 30,
        justifyContent: 'space-between',
        borderWidth: 2,
        paddingVertical: 27,
        borderRadius: 6,
        borderColor: '#22B5A3'
    },
    lista: {
        marginBottom: 20,
        marginHorizontal: 5,
        borderWidth: 1,
        backgroundColor: '#a1caf1',
        paddingVertical: 25,
        paddingHorizontal: 7,
        borderRadius: 7,
        alignItems: 'center',    
        justifyContent: 'space-between',    
        flexDirection: 'row',
    },
    textAprobado: {
        color: 'green',
    },
    textReprobed: {
        color: 'red',
    },
    contentContainer: {
        paddingVertical: 20
    },

})