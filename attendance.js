import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { DataContext } from './context'
const AttendancePage = () => {
  const { data, loading, error } = useContext(DataContext);

  const students =data.class.students; 

  
  const [attendance, setAttendance] = useState(
    students.map((student) => ({ name: student, status: null })) 
  );

  
  const selectAttendance = (index, status) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[index].status = status;
    setAttendance(updatedAttendance);
  };

  
  const submitAttendance = () => {
    console.log('Attendance Submitted:', attendance);
  
  };

  
  const RadioButton = ({ selected, onPress, label }) => (
    <TouchableOpacity style={styles.radioContainer} onPress={onPress}>
      <View style={[styles.radioCircle, selected && styles.radioSelected]} />
      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance</Text>
      <FlatList
        data={attendance}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.studentName}>{item.name}</Text>
            <View style={styles.radioGroup}>
              <RadioButton
                selected={item.status === 'present'}
                onPress={() => selectAttendance(index, 'present')}
                label="Present"
              />
              <RadioButton
                selected={item.status === 'absent'}
                onPress={() => selectAttendance(index, 'absent')}
                label="Absent"
              />
            </View>
          </View>
        )}
      />
      <Button title="Submit Attendance" onPress={submitAttendance} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  studentName: {
    fontSize: 18,
    width: '40%',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '60%',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    backgroundColor: '#000',
  },
  radioLabel: {
    marginLeft: 8,
  },
});

export default AttendancePage;
