
import React from 'react';
import {View, Text, StyleSheet, AppRegistry } from 'react-native';
import Header from './Header';
import { Route, Switch, Redirect, useParams } from 'react-router-native';
import Video from 'react-native-video';
import video from '../assets/vertical.mp4'

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });

const Details = () =>{

    const id = useParams().id 

    return(
        <View>
            <Header page={'Details'}/>
            <Text>{id}</Text>
            <Video source={video}   // Can be a URL or a local file.                                     // Store reference
                onBuffer={this.onBuffer}                // Callback when remote video is buffering
                onError={this.videoError}               // Callback when video cannot be loaded
                style={styles.backgroundVideo} />
        </View>

)};


export default Details;

