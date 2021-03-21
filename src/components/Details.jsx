import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Route, Switch, Redirect, useParams } from 'react-router-native';

const styles = StyleSheet.create({

  })

const Analysis = () =>{

    const id = useParams().id 

    return(
        <View>
            <Text>{id}</Text>
        </View>
    )
}

export default Analysis;