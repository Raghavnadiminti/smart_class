import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const DataContext = createContext();


export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    user: null, 
    attendance: [],
    assignments: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const Class = await axios.get('https://localhost:5000/getclass/:CS202');
        const student = await axios.get('https://localhost:5000/getStudent/:S102');
        const teacher = await axios.get('https://localhost:5000/getTeacher/:T101');

        
        setData({
         class:Class,
         student:student,
         teacher:teacher
        });
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <DataContext.Provider value={{ data, setData, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
