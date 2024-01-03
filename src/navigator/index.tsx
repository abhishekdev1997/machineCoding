import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screens from "../screens";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen1">
                <Stack.Screen name="Screen1" component={Screens.Screen1Screen} />
                <Stack.Screen name="Screen2" component={Screens.Screen2Screen} />
                <Stack.Screen name="Screen3" component={Screens.Screen3Screen} />
                <Stack.Screen name="Screen4" component={Screens.Screen4Screen} />
                <Stack.Screen name="Screen5" component={Screens.Screen5Screen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;