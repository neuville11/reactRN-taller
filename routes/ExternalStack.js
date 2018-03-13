import { StackNavigator } from 'react-navigation'
import Login from '../components/Login'
import Home from '../components/Home'

const ExternalStack = StackNavigator(
  {
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    }
  },
  {
    headerMode: 'none'
  }
)
export default ExternalStack;
