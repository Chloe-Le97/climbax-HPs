// Analysis component: contains video 
import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const styles = StyleSheet.create({
  container: {}
  })

const Video = (props) =>{

    return(
        <View style={styles.container}>
            {props.data && (
              <React.Fragment></React.Fragment>
            )}
        </View>
    )
}

export default Video;