import React, { useState } from 'react';
import { View, 
  Text,
  TouchableOpacity,
  TextInput ,
  FlatList} from 'react-native';

import { FontAwesome } from '@expo/vector-icons'

import { styleHome } from './style';

import Tarefas from './src/Tarefas';

export default function App(){

  const [tarefas, setfarefas] = useState('')
  const [List, setList] = useState([])


  function HandleNovaTarefa(){

    if(tarefas === ''){
      return;
    }

    let dados = {
      key: Date.now(),
      item: tarefas
    }
    setList(orlArray => [dados, ...orlArray])
    setfarefas('')
  }

  function HandleDelete(item){
    let filtroItem = List.filter((tarefa)=> {
      return (tarefa.item !== item)
    })

    setList(filtroItem)
  }

  return (
    <View style={styleHome.container}>
      <Text style={styleHome.title}>Tarefas</Text>

      <View style={styleHome.containerInput}>
        <TextInput
        placeholder='Digite sua tarefa'
        style={styleHome.input}
        value={tarefas}
        onChangeText={(v) => setfarefas(v)}
        />
      <TouchableOpacity style={styleHome.buttomAdd} onPress={HandleNovaTarefa}>
        <FontAwesome name='plus' size={20} color='#fff'/>
      </TouchableOpacity>
      </View>

      <FlatList
        data={List}
        keyExtractor={(item)=> item.key}
        renderItem={ ({item}) => <Tarefas data={item} deleteItem={()=> HandleDelete(item.item)}/> }
        style={styleHome.list}
      /> 

    </View>
  )
}


