import React from 'react';

//React Navigations
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Parking Screens
import ParkingGaragesScreen, { screenOptions as parkingGaragesScreenOptions } from '../screens/Parking/ParkingGaragesScreen';
import ParkingAreaDetailScreen, { screenOptions as parkingAreaDetailScreenOptions } from '../screens/Parking/ParkingAreaDetailScreen';
import ParkingAreasScreen, { screenOptions as parkingAreasScreenOptions } from '../screens/Parking/ParkingAreasScreen';

// User Screens
import UserProfileScreen from '../screens/User/UserProfileScreen';
import UserProfileEditScreen from '../screens/User/UserProfileEditScreen';

// import colors for conveniently using them
import Colors from '../constants/Colors';
// import svg icons for tab bar
import { MapPin, User } from '../components/icons';


// Create default navigation options for same styling every stack.
const defaultNavOptions = {
  headerTintColor: Colors.light,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: Colors.mayoralViolet
  },
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
};

// And also for more readable code lets add some styling for bottom tab navigator
const defaultTabBarOptions = {
  inactiveTintColor: Colors.light,
  inactiveBackgroundColor: Colors.mayoralViolet,
  activeBackgroundColor: Colors.inherentAqua,
  activeTintColor: Colors.accent,
  labelStyle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  tabStyle: {
    marginTop: -12,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

// Create a stack navigator for parking screens
const ParkingStackNavigator = createStackNavigator();

const ParkingNavigator = props => {
  return (
    <ParkingStackNavigator.Navigator
      screenOptions={defaultNavOptions}
    >
      <ParkingStackNavigator.Screen
        name="ParkingGarages"
        component={ParkingGaragesScreen}
        options={parkingGaragesScreenOptions}
      />
      <ParkingStackNavigator.Screen
        name="ParkingAreas"
        component={ParkingAreasScreen}
        options={parkingAreasScreenOptions}
      />
      <ParkingStackNavigator.Screen
        name="ParkingAreaDetail"
        component={ParkingAreaDetailScreen}
        options={parkingAreaDetailScreenOptions}
      />
    </ParkingStackNavigator.Navigator>
  );
};

// Create a stack nav for user screens
const UserStackNavigator = createStackNavigator();

const UserNavigator = props => {
  return (
    <UserStackNavigator.Navigator
      screenOptions={defaultNavOptions}
    >
      <UserStackNavigator.Screen
        name="UserProfile"
        component={UserProfileScreen}
      />
      <UserStackNavigator.Screen
        name="EditProfile"
        component={UserProfileEditScreen}
      />

    </UserStackNavigator.Navigator>
  );
};

// Tab Navigator
const MainTabNavigator = createBottomTabNavigator();

// Now, We export the navigator below, because this is our main navigation. Our Tab bar includes also stack navigator.

export const MainNavigator = () => {
  return (
    <MainTabNavigator.Navigator
      tabBarOptions={defaultTabBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Parking Areas':
              return <MapPin size={size} color={color} />
            case 'Profile':
              return <User size={size} color={color} />
            default:
              return;
          }
        }
      })}
    >
      <MainTabNavigator.Screen
        name='Parking Areas'
        component={ParkingNavigator}
      />
      <MainTabNavigator.Screen
        name='Profile'
        component={UserNavigator}
      />
    </MainTabNavigator.Navigator>
  );
};