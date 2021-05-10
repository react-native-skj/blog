# Project Generation

Expo-cli has been used to generate this project. To ensure that we don't accidentally mix Yarn and npm in our project, add the --npm flag:

```bash
npx expo-cli init blog --npm

# To run your project, navigate to the directory and run one of the following npm commands.

cd blog
npm start

# you can open iOS, Android, or web from here, or run them directly with the commands below.
npm run android
npm run ios
npm run web

```

## React Navigation v5

```bash
# Install React Navigation
npm install react-navigation

# Install Dependencies
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

# Install React Navigation Stack
npm install react-navigation-stack @react-native-community/masked-view

# Start the app and clear cache with
expo r -c

# Update Imports
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
```

## headerRight Deprecation in 'navigationOptions'

```js
return {
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <Feather name="plus" size={30} />
    </TouchableOpacity>
  ),
};

return {
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
      <EvilIcons name="pencil" size={35} />
    </TouchableOpacity>
  ),
};
```
