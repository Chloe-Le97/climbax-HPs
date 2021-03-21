import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import VerticalWP from '../assets/vertical-wp.PNG'

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
  },
  feedItem: {
    margin: '10px 0'
  },  
  feedItemTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    padding: 10,
  },
  feedItemMedia: {
    height: 400,
    width: '100%'
  },
  img: {
    width: '100vw',
    height: 400
  }
});

const Feed = () => {
  return (
    <View style={styles.container}>
      <Header page={"Feed"} />

      <View style={styles.feedContainer}>
        <View style={styles.feedItem}>
          <View style={styles.feedItemTitle}>
            <Link to="/vertical">
              <Text>
                <FontAwesomeIcon icon={faHeart} />
                <Text style={{ marginLeft: 5 }}>Climbax Mammut</Text>
              </Text>
            </Link>

            <Text>25.02.21 13.45</Text>
          </View>
          <View style={styles.feedItemMedia}>
            <Link to="/vertical">
              <Image source={{uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fextreme-winter-climbing-picture-id518208206%3Fk%3D6%26m%3D518208206%26s%3D612x612%26w%3D0%26h%3DeIzBouPKX0DIVh94CGD00vwDMGHJKQBFQX_Et0lkguM%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Frock-climbing&tbnid=6x1xLi5QybF80M&vet=12ahUKEwiT64LFzsDvAhXSxSoKHc_KApYQMygAegUIARC-AQ..i&docid=5zBYuuL9gpre7M&w=612&h=408&q=climbing%20img&ved=2ahUKEwiT64LFzsDvAhXSxSoKHc_KApYQMygAegUIARC-AQ'}} style={styles.img} />
            </Link>
          </View>
          <View style={styles.feedItemFooter}></View>
        </View>
      </View>
    </View>
  );
};

export default Feed;
