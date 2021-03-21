import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { farHeart } from "@fortawesome/free-regular-svg-icons";

import VerticalWP from "../assets/vertical-wp.PNG";
import TraverseWP from "../assets/traverse-wp.PNG";
import OverhangWP from "../assets/overhang-wp.PNG";

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginBottom: 50
  },
  feedItem: {
    marginTop: 10,
    marginBottom: 20
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
    width: "100%",
  },
  img: {
    width: "100vw",
    height: 400,
  },
  feedItemFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    padding: 10,
  },
});

const Feed = () => {
  const [Bumps1, setBumps1] = React.useState(farHeart);
  const [Bumps2, setBumps2] = React.useState(farHeart);
  const [Bumps3, setBumps3] = React.useState(farHeart);

  const setIcon = (idx) => {
    switch (idx) {
      case 1:
        Bumps1 == farHeart ? setBumps1(faHeart) : setBumps1(farHeart);
        break;
      case 2:
        Bumps2 == farHeart ? setBumps2(faHeart) : setBumps2(farHeart);
        break;
      case 3:
        Bumps3 == farHeart ? setBumps3(faHeart) : setBumps3(farHeart);
        break;

      default:
        break;
    }
  };

  console.log(Bumps1)

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
              <Image source={VerticalWP} style={styles.img} />
            </Link>
          </View>
          <View style={styles.feedItemFooter}>
            <Text> 16 bumps</Text>
            <Text>
              <FontAwesomeIcon icon={Bumps1} onClick={() => setIcon(1)} />
              <FontAwesomeIcon icon={faShare} />
            </Text>
          </View>
        </View>
        <View style={styles.feedItem}>
          <View style={styles.feedItemTitle}>
            <Link to="/vertical">
              <Text>
                <FontAwesomeIcon icon={faHeart} />
                <Text style={{ marginLeft: 5 }}>Climbax Mammut</Text>
              </Text>
            </Link>

            <Text>25.02.21 13.30</Text>
          </View>
          <View style={styles.feedItemMedia}>
            <Link to="/traverse">
              <Image source={TraverseWP} style={styles.img} />
            </Link>
          </View>
          <View style={styles.feedItemFooter}>
            <Text> 20 bumps</Text>
            <Text>
              <FontAwesomeIcon icon={Bumps2} onClick={() => setIcon(2)} />
              <FontAwesomeIcon icon={faShare} />
            </Text>
          </View>
        </View>
        <View style={styles.feedItem}>
          <View style={styles.feedItemTitle}>
            <Link to="/vertical">
              <Text>
                <FontAwesomeIcon icon={faHeart} />
                <Text style={{ marginLeft: 5 }}>Climbax Mammut</Text>
              </Text>
            </Link>

            <Text>25.02.21 13.13 </Text>
          </View>
          <View style={styles.feedItemMedia}>
            <Link to="/overhang">
              <Image source={OverhangWP} style={styles.img} />
            </Link>
          </View>
          <View style={styles.feedItemFooter}>
            <Text> 10 bumps</Text>
            <Text>
              <FontAwesomeIcon icon={Bumps3} onClick={() => setIcon(3)} />
              <FontAwesomeIcon icon={faShare} />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Feed;
