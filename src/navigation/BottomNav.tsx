import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Routes from './routes';
import BottomTab from '../components/BottomTab';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator
            tabBar={props => <BottomTab {...props} />}
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen name={Routes.Home} component={Home} />
            <Tab.Screen name={Routes.Order} component={Home} />
            <Tab.Screen name={Routes.Profile} component={Home} />
            <Tab.Screen name={Routes.Support} component={Home} />
        </Tab.Navigator>
    );
}

export default BottomNav