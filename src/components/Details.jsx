import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./Header";
import { useParams } from "react-router-native";
import Video from "./Video";
import Graph from "./Graph";
import vertical from '../../JSON/vertical.json'
import overhang from '../../JSON/overhang.json'
import traverse from '../../JSON/traverse.json'

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const Details = () => {
  const id = useParams().id;

  const data = id === 'vertical' ? vertical: id=== 'overhang'? overhang : id ==='traverse'? traverse: null;

  return (
    <View>
      <Header page="Analysis" />
      <View style={styles.mainContainer}>
        <Text>{id}</Text>
        <Video data={data}></Video>
        <Graph data={data.summary}></Graph>
      </View>
    </View>
  );
};

export default Details;
