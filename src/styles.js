import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    active: {
        fontSize: 28,
        color:'blue',
        paddingLeft: 22,
    }, 
    nonActive: {
        fontSize: 28,
        color: 'gray',
        paddingLeft: 22
    },
    inputField: {
        height: 50,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: 20,
        marginTop: 20,
        color: 'black'
    },
    btnStyle: {
        width: 200,
        borderRadius: 20,
        marginTop: 50
    }
})

export default styles;