import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/home'
import { Detail } from '../pages/detail'
import { Search }  from '../pages/search'

const Stack = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen nome= "Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen nome= "Detail" component={Detail} options={{title:"Detalhes da receita"}} />
            <Stack.Screen nome= "Search" component={Search} options={{title:"Veja o que encontramos"}}/>
        </Stack.Navigator>
    )
}