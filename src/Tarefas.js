import React from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import { styletarefas } from '../style'

import { FontAwesome } from '@expo/vector-icons'

export default function Tarefas({data, deleteItem}) {
  return (
    <View style={styletarefas.container} >
        <TouchableOpacity style={styletarefas.button} onPress={deleteItem}>
            <FontAwesome name='trash' size={20} color='#22272e'/>
        </TouchableOpacity>

        <Text>{data.item}</Text>
    </View>
  )
}
