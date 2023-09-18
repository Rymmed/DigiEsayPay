import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddCustomer from "../screens/AddCustomer";
import AddNotification from "../screens/AddNotification";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Customer" component={AddCustomer} />
      <Stack.Screen name="Add Notification" component={AddNotification} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
