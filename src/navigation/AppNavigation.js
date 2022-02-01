import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SvgAdd from "../components/Svgs/Add";

// import screens
import HomeScreen from "../screens/HomeScreen";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  console.log({ state, descriptors, navigation });
  return (
    <View style={styles.navbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, { name: "Custom profile header" });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={Math.floor(Math.random() * 160) + 5}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text
              style={[
                styles.navItem,
                { color: isFocused ? "#673ab7" : "#222" },
              ]}
            >
              <SvgAdd />
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#00155F",
            },
            headerTintColor: "#ffffff",
            headerLeft: () => "Left",
            headerRight: () => "Right",
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={SettingsScreen}
          options={{
            title: "Welcome",
            headerStyle: {
              backgroundColor: "#00155F",
            },
          }}
        />
        <Tab.Screen name="Plan" component={SettingsScreen} />
        <Tab.Screen name="Analitic" component={SettingsScreen} />
        <Tab.Screen name="User" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00155F",
  },
  navbar: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00155F",
  },
  navItem: {
    textAlign: "center",
  },
  navImg: {
    marginVertical: -10,
    paddingVertical: 0,
    marginBottom: 0,
  },
});
