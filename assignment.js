import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const AssignmentForm = () => {
  
  const [assignmentNumber, setAssignmentNumber] = useState('');
  const [assignmentName, setAssignmentName] = useState('');
  const [lastDate, setLastDate] = useState(new Date());
  const [pdfName, setPdfName] = useState(null);
  const [pdfUri, setPdfUri] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  
  const selectPdf = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf', 
      });

      if (res.type === 'success') {
        setPdfName(res.name); 
        setPdfUri(res.uri);   
      }
    } catch (err) {
      console.log('Error picking document:', err);
    }
  };

  
  const showDate = () => setShowDatePicker(true);

  
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || lastDate;
    setShowDatePicker(false);
    setLastDate(currentDate);
  };

  
  const saveAssignment = () => {
    console.log('Assignment Number:', assignmentNumber);
    console.log('Assignment Name:', assignmentName);
    console.log('Last Date of Submission:', lastDate.toLocaleDateString());
    console.log('PDF Name:', pdfName);
    console.log('PDF URI:', pdfUri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit Assignment</Text>

      
      <TextInput
        style={styles.input}
        placeholder="Assignment Number"
        keyboardType="numeric"
        value={assignmentNumber}
        onChangeText={setAssignmentNumber}
      />

     
      <TextInput
        style={styles.input}
        placeholder="Assignment Name"
        value={assignmentName}
        onChangeText={setAssignmentName}
      />

      
      <View style={styles.datePickerContainer}>
        <Button title="Select Last Date" onPress={showDate} />
        <Text style={styles.dateText}>
          {lastDate ? `Last Date: ${lastDate.toLocaleDateString()}` : 'No date selected'}
        </Text>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={lastDate}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      
      <View style={styles.filePickerContainer}>
        <Button title="Select PDF" onPress={selectPdf} />
        {pdfName && (
          <Text style={styles.fileNameText}>Selected PDF: {pdfName}</Text>
        )}
      </View>

      
      <Button title="Save Assignment" onPress={saveAssignment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  datePickerContainer: {
    marginBottom: 20,
  },
  dateText: {
    marginTop: 10,
    fontSize: 16,
  },
  filePickerContainer: {
    marginBottom: 20,
  },
  fileNameText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default AssignmentForm;
