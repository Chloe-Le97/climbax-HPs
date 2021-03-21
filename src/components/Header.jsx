import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
    headerDiv:{
        position: 'fixed',
        top: 0,
        height: '40',
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    arrow:{
        marginLeft: 15
    }
  })

const Header = () =>{

    return(
        <View style={styles.headerDiv}>
            <FontAwesomeIcon icon={ faArrowLeft } />
            <Text style={styles.arrow}>Analysis</Text>
        </View>
    )
}

export default Header;