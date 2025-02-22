import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import AttendancePage from './attendance';
import MessagePage from './doubts';
import PdfUploadPage from './assignment';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>profile</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'doubts') {
            iconName = focused ? 'chatbox' : 'chatbox';
          } else if (route.name === 'analysis') {
            iconName = focused ? 'analytics' : 'analytics';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          }
          else if (route.name === 'attendance') {
            iconName = focused ? 'id-card-sharp' : 'id-card-sharp';
          }
          else if (route.name === 'assignments') {
            iconName = focused ? 'book' : 'book';
          }

          
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="doubts" component={MessagePage} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="attendance" component={AttendancePage} />
      <Tab.Screen name="analysis" component={ProfileScreen} />
      <Tab.Screen name="assignments" component={PdfUploadPage} />


    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
