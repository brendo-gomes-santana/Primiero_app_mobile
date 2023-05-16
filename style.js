import { StyleSheet } from 'react-native'
export const styleHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22272e',
        paddingTop: 28
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff',
        marginTop: '5%',
        paddingStart: '5%',
        marginBottom: 12
    },
    containerInput: {
        flexDirection: 'row',
        width: '100%',
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 22
    },
    input: {
        width: "75%",
        backgroundColor: '#fbfbfb',
        height: 44,
        borderRadius: 4,
        paddingHorizontal: 8
    },
    buttomAdd: {
        width: '15%',
        height: 44,
        backgroundColor: '#73f7ff',
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    list: {
        flex: 1,
        backgroundColor: '#fff',
        paddingStart: '4%',
        paddingEnd: '4%'
    }
})

export const styletarefas = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196,196,196, 0.20)',
        marginTop: 12,
        padding: 12,
        borderRadius:4,
        flexDirection: 'row'
    },
    button: {
        marginRight: 4
    }
})