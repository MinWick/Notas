import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


interface Props{
    title:number;
    defaultValue:number;
    onChangeNum:(num: number) => void;
}
const Gnotas = ({title, defaultValue, onChangeNum}:Props) => {
    
    const [FNota, setFNota] = React.useState<number>(0)
    const [SNota, setSNota] = React.useState<number>(0)
    const [resultado, setResultado] = React.useState(0)


    return (
        <View>
            
        </View>
    )
}

export default Gnotas

const styles = StyleSheet.create({})
