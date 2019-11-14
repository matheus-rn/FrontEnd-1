import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import RegisterSkills from './pages/RegisterSkills/RegisterSkills'
import Profile from './pages/Profile/Profile'

const Routes = createAppContainer(
    createSwitchNavigator({
        Profile,
        SignIn,
        SignUp,
        RegisterSkills,

    })
);

export default Routes;
