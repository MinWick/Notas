import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import Gnotas from '../components/Gnotas'

const Notas = () => {

    const [palabra, setPalabra] = useState([''])
    const [text, setText] = useState<string>('');
    const [FNota, setFNota] = useState<string>('')
    const [SNota, setSNota] = useState<string>('')
    const [resultado, setResultado] = useState<number[]>([])

    const hasndleShow = () => {
        const newuser: string[] = [text]
        const users = [...palabra, ...newuser]
        setPalabra(users)
        let result = parseFloat(FNota) + parseFloat(SNota)
        let resultFinal = ( result / 2 )
        const NF = [...resultado, resultFinal]
        setResultado(NF)
        console.log(resultado);
    }
    useEffect(() => {
       hasndleShow() 
    }, [])
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <TextInput style={styles.Tinputs}
                placeholder='Nombre del estudiante'
                onChangeText={text => setText(text)}
            />
            <Gnotas
                title={"IP"}
                defaultValue={"IP"}
                onChangeText={setFNota}
            />
            <Gnotas
                title={"IIP"}
                defaultValue={"IIP"}
                onChangeText={setSNota}
            />
            <Gnotas
                title={"NF"}
                defaultValue={"NF"}
                onChangeText={setSNota}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={hasndleShow}
            >
                <Text>
                    Agregar
                </Text>
            </TouchableOpacity>

            {
                palabra.map((item, index) =>
                    <View style={styles.constainer}>
                        <Text key={index}>
                            {item}
                        </Text>
                        <Text>
                            {resultado}
                        </Text>
                    </View>

                )
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
      }  

})
