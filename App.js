import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import imBG from './source/imBG.jpg';
import mainScreen from './component/Home';
import socketIO from 'socket.io-client';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  ImageBackground,
  ToastAndroid,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const AppButtonHeader = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainerHeader}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton {...props} IconComponent={Icon} iconSize={23} color="white" />
);

const ReusableSelectItem = ({onPress}) => <Button onPress={onPress} />;

const ReusableHiddenItem = ({onPress}) => (
  <HiddenItem title="hidden2" onPress={onPress} />
);
function Main({navigation}) {
  return <Text>Main Screen</Text>;
}

function LoginScreen({navigation}) {
  return (
    <ImageBackground source={imBG} style={styles.backgroundContainer}>
      <View style={styles.container}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontStyle: 'italic',
            marginBottom: 20,
          }}>
          Login
        </Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor="white"
          style={styles.txtInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="white"
          style={styles.txtInput}
        />
        <AppButton
          title="Sign In"
          onPress={() => navigation.navigate('market')}
          //
        />
        <Text
          style={{
            fontStyle: 'italic',
            color: 'white',
            fontSize: 20,
            margin: 20,
          }}
          onPress={() => navigation.navigate('Details')}>
          Don't have account, creat now !
        </Text>
      </View>
    </ImageBackground>
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={styles.scrollView}>
    //       <View style={styles.body}>
    //         <View style={styles.sectionContainer}>

    //           <Text style={styles.sectionTitle}>Connection Check</Text>
    //           <Text style={styles.sectionDescription}>
    //             <Text style={styles.highlight}>""</Text>
    //           </Text>
    //         </View>
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </>
  );
}

function Register({navigation}) {
  return (
    <ImageBackground source={imBG} style={styles.backgroundContainer}>
      <View style={styles.container}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontStyle: 'italic',
            marginBottom: 20,
          }}>
          Register
        </Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor="white"
          style={styles.txtInput}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="white"
          style={styles.txtInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="white"
          style={styles.txtInput}
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
}

function Market({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Market</Text>
      <Icon name="home" size={20} />
    </View>
  );
}

function Watchlist() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Watchlist</Text>
    </View>
  );
}

function News() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>New</Text>
    </View>
  );
}

function Trading() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Trading</Text>
    </View>
  );
}

function Config({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="market"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          switch (route.name) {
            case 'market':
              iconName = 'home';
              break;
            case 'watchlist':
              iconName = 'md-briefcase-sharp';
              break;
            case 'news':
              iconName = 'newspaper-sharp';
              break;
            case 'trading':
              iconName = 'bar-chart';
              break;
            case 'config':
              iconName = 'settings';
              break;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        //activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 13,
          paddingBottom: 5,
        },
        style: {
          paddingTop: 5,
          height: 60,
        },
        iconStyle: {
          // margingTop: 20,
        },
      }}>
      <Tab.Screen
        name="market"
        component={Market}
        options={{
          tabBarLabel: 'Market',
        }}
      />
      <Tab.Screen
        name="watchlist"
        component={Watchlist}
        options={{
          tabBarLabel: 'Watchlist',
        }}
      />
      <Tab.Screen
        name="news"
        component={News}
        options={{
          tabBarLabel: 'News',
        }}
      />
      <Tab.Screen
        name="trading"
        component={Trading}
        options={{
          tabBarLabel: 'Trading',
        }}
      />
      <Tab.Screen
        name="config"
        component={Config}
        options={{
          tabBarLabel: 'Config',
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const url = 'https://trading.vise.com.vn/';
const connectionConfig = {
  forceNew: true,
  reconnection: true,
  reconnectionDelay: 500,
  secure: true,
  transports: ['websocket', 'polling'],
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Waiting.....',
    };

    // tradingSocket.on('reconnect_error', (Err) => {
    //   console.log(Err);
    // });
    // if (httpType && httpType == 'https') {
    //   tradingSocket = socketIO(url, {
    //     forceNew: true,
    //     reconnection: true,
    //     reconnectionDelay: 500,
    //     secure: true,
    //     transports: ['websocket', 'polling'],
    //   });
    // } else {
    //   tradingSocket = socketIO(url, {
    //     forceNew: false,
    //     reconnection: true,
    //     reconnectionDelay: 500,
    //     transports: ['websocket'],
    //   });
    // }
    // this.tradingSocket.on('connect_error', (Err) => {
    //   console.log(Err);
    // });
  }

  componentDidMount() {
    // const url = 'https://trading.vise.com.vn/';
    // const connectionConfig = {
    //   forceNew: true,
    //   reconnection: true,
    //   reconnectionDelay: 500,
    //   secure: true,
    //   transports: ['websocket', 'polling'],
    // };
    // this.tradingSocket = socketIO(url, connectionConfig);
    this.tradingSocket = socketIO(url, connectionConfig);
    this.tradingSocket.on('connect', () => {
      Alert.alert('Server connected!');
      //this.setState({message: 'Server connected!'});
    });
    this.tradingSocket.on('MKT_INFO', (data) => {
      console.warn(data);
      this.setState({message: data});
    });
    // this.tradingSocket.on('connect_error', (err) => {
    //   //this.setState({message: '' + err});
    //   console.info(err);
    // });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#007bff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
            },
          }}>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Login',
            }}
          />
          <Stack.Screen
            name="Details"
            component={Register}
            options={{
              title: 'Register',
            }}
          />
          <Stack.Screen
            name="Main"
            component={HomeTabs}
            options={{
              headerRight: () => (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                  {/* <ReusableSelectItem
                    onPress={() => alert('Edit')}
                    title="BUY"
                    // color="RED"
                  /> */}
                  <AppButtonHeader onPress={() => alert('Buy')} title="BUY" />
                  <AppButtonHeader
                    onPress={() => alert('Sell')}
                    title="SELL"
                    color="green"
                  />
                  <Item
                    title="search"
                    iconName="notifications"
                    onPress={() => alert('search')}
                  />
                  {/* <OverflowMenu
                    style={{marginHorizontal: 10}}
                    OverflowIcon={
                      <Icon name="ellipsis-vertical" size={23} color="blue" />
                    }>
                    <HiddenItem
                      title="hidden1"
                      onPress={() => alert('hidden1')}
                    />
                    <ReusableHiddenItem onPress={() => alert('hidden2')} />
                  </OverflowMenu> */}
                </HeaderButtons>
                // <View>
                //   <Button
                //     onPress={() => alert('This is a buy button!')}
                //     title="BUY"
                //     color="#fff"
                //   />
                //   <Button
                //     onPress={() => alert('This is a Sell button!')}
                //     title="SELL"
                //     color="#fff"
                //   />
                //   <Icon
                //     name="notificationse"
                //     size={20}
                //     onPress={() => alert('This is a notifications button!')}
                //   />
                // </View>
              ),
              headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                  <Item
                    title="search"
                    iconName="ios-search"
                    onPress={() => alert('search')}
                  />
                </HeaderButtons>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  appButtonContainer: {
    elevation: 5,
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    margin: 20,
  },

  appButtonContainerHeader: {
    elevation: 5,
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 15,
    margin: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  btnSignIn: {
    width: 400,
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 45,
    color: 'white',
    marginBottom: 10,
  },
  txtInput: {
    width: 400,
    paddingStart: 10,
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 45,
    color: 'white',
    marginBottom: 10,
  },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginBottom: 5,
    alignItems: 'center',
  },
  scrollView: {
    //backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    // backgroundColor: Colors.white,
  },
  sectionContainer: {
    margin: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    //color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    //color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    // color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
