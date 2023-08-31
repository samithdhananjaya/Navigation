import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PieChart } from 'react-native-chart-kit';

const DashboardScreen = () => {
  const pieChartData = [
    { name: 'Category 1', population: 2150000, color: '#f00' },
    { name: 'Category 2', population: 2800000, color: '#0f0' },
    { name: 'Category 3', population: 2800000, color: '#D81BC5' },
    { name: 'Category 4', population: 2800000, color: '#2D10E8' },    
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="user" size={40} color="#007bff" />
          <Text style={styles.iconText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="file-text" size={40} color="#007bff" />
          <Text style={styles.iconText}>Documents</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="heart" size={40} color="#007bff" />
          <Text style={styles.iconText}>Health</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="calendar" size={40} color="#007bff" />
          <Text style={styles.iconText}>Appointments</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>User Health</Text>
        <PieChart
          data={pieChartData}
          width={200}
          height={200}
          accessor="population"
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={styles.chart}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#80FBAD',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#DCFBE8',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  iconText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor:'#80FBF3'
  },
  chartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'blue'
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16, 
  },
});
export default DashboardScreen;
