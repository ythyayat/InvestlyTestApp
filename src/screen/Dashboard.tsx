import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../common/colors';
import {Icon} from '../component';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Icon name="emptyState" size={312} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
