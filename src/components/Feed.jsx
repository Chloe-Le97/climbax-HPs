import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
  container: {}
  })

const Feed = () =>{

    return(
        <View style={styles.container}>
            <Header/>
        </View>
    )
}

export default Feed;