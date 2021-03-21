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
        borderTopWidth: 1,
        borderColor: '#E5E5E5'
    },
    icon:{
        padding: 15,
    }
  })

const Footer = () =>{

    return(
        <View style={styles.footerDiv}>
            <FontAwesomeIcon icon={ faStickyNote } style={{padding: 15, borderTop: '2px solid rgb(0,0,0)'}}/>
            <FontAwesomeIcon icon={ faTrophy } color={"#949494"} style={styles.icon}/>
            <FontAwesomeIcon icon={ faPlus } color={"#949494"} style={styles.icon}/>
            <FontAwesomeIcon icon={ faTachometerAlt } color={"#949494"} style={styles.icon}/>
            <FontAwesomeIcon icon={ faUser } color={"#949494"} style={styles.icon}/>
        </View>
    )
}

export default Footer;