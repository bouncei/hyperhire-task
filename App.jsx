import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingScreen } from "./components/screens/LandingScreen";
import { RegisterScreen } from "./components/screens/RegisterScreen";
import { CompetitionScreen } from "./components/screens/CompetitionScreen";
import { DashboardScreen } from "./components/screens/DashboardScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* SCREENS */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LandingScreen} />
        <Stack.Screen name="SignUp" component={RegisterScreen} />
        <Stack.Screen name="Competition" component={CompetitionScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

export default AppEntryPoint;
