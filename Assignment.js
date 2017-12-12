import React, {Component} from 'react';
import { AppRegistry , Image ,StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
	  let pic = { 
	  uri : 'http://www.flameofafrica.com/wp-content/uploads/2015/08/Mauritius-1.jpg'
	  } ;
    return (
      <View style={styles.container}>
	    <Text style={styles.bigblue}>DISCOVERING MAURITIUS</Text>
		<Image source ={pic} style = {{width: 400 , height : 195}}/>
		<Text style={styles.bigred}>ABOUT | SERVICES | REVIEWS</Text>
		<Text>  </Text>
		<Text>  </Text>
        <Text style={styles.bigred}> ABOUT </Text>
        <Text>  </Text>
		<Text style={styles.bigblack}>Mauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs. The mountainous interior includes Black River Gorges National Park, with rainforests, waterfalls, hiking trails and wildlife like the flying fox. Capital Port Louis has sites such as the Champs de Mars horse track, Eureka plantation house and 18th-century Sir Seewoosagur Ramgoolam Botanical Gardens.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor: '#87cefa',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  bigred: {
	  color : '#dc143c' ,
	  fontWeight : 'bold' ,
	  fontSize : 25,
  } ,
  bigblack: {
	  color : 'black' ,
	  fontWeight : 'bold' ,
	  fontSize : 17,
  } ,
});
