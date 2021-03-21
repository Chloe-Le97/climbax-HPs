import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-native';

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

const Header = (props) =>{

    return(
        <View style={styles.headerDiv}>
            {props.page !== 'Feed'  &&<Link to="/"><FontAwesomeIcon icon={ faArrowLeft } /></Link>}
            <Text style={styles.arrow}>{props.page}</Text>
        </View>
    )
}

export default Header;