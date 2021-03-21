import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 70
  },
  feedContainer:{
    display: 'flex',
    flexDirection: 'row'
  }
  })

const Feed = () =>{

    return(
        <View style={styles.container}>
            <Header page={'Feed'}/>
            <View style={styles.feedContainer}>
              <FontAwesomeIcon icon={ faHeart } />
              <Text>Climbax Mammut</Text>
              <Text>25.02.21 13.45</Text>
            </View>
            <View>
              <Link to='/vertical'>
                <Text>Vertical</Text>
              </Link>
            </View>
           
        </View>
    )
}

export default Feed;