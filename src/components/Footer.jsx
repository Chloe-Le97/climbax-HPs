import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStickyNote, faUser } from '@fortawesome/free-regular-svg-icons'
import { faTrophy, faPlus, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
    footerDiv:{
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '40',
        width: '100%',
        padding: 15,
        borderTopWidth: 1,
        borderColor: '#E5E5E5'
    }
  })

const Footer = () =>{

    return(
        <View style={styles.footerDiv}>
            <FontAwesomeIcon icon={ faStickyNote }/>
            <FontAwesomeIcon icon={ faTrophy } color={"#949494"}/>
            <FontAwesomeIcon icon={ faPlus } color={"#949494"}/>
            <FontAwesomeIcon icon={ faTachometerAlt } color={"#949494"}/>
            <FontAwesomeIcon icon={ faUser } color={"#949494"}/>
        </View>
    )
}

export default Footer;