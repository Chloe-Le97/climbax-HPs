
import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import { Route, Switch, Redirect, useParams } from 'react-router-native';

const styles = StyleSheet.create({

  })

const Details = () =>{

    const id = useParams().id 

    return(
        <View>
            <Header/>
            <Text>{id}</Text>
        </View>

)};


export default Details;

