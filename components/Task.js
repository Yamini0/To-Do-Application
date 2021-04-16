import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './Style';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  );
};

export default Task;
