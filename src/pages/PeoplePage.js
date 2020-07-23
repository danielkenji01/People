import React from 'react'; 
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'; // Disruct

//import Header from '../components/Header';
import PeopleList from '../components/PeopleList';

import axios from 'axios';

export default class PeoplePage extends React.Component {

  /* constructor() => state = []
   * render()
   * componentDidMoun()
   * axios.get()
   * state = [..., ...]
   * render()
   */

  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false
    }
  } 

  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
      .get('https://randomuser.me/api/?nat=br&results=150')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results,
          loading: false
        })
      })
      .catch(error => {
        this.setState({
          error: true,
          loading: false
        })
      });
    }, 1500);
  }

  renderList() {
    const textElements = this.state.peoples.map(people => {
      const {first} = people.name;
      return <Text key={first}>{first}</Text>
    });

    return textElements;
  }

  renderPage() {

    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#6ca2f7" />
    }

    if (this.state.error) {
      return <Text style={styles.error}>Ops... Deu erro :(</Text>
    }

    return (
      <PeopleList 
        peoples={this.state.peoples} 
        onPressItem={(pageParams) => {
          this.props.navigation.navigate('PeopleDetail', pageParams)
        }}
      />   
    )
  }

  render() {
    // this.props.navigation.navigate(Chave da página, state)
    //this.props.navigation.navigate('PeopleDetail');
    return (
      <View style={styles.container}>
        { this.renderPage() }
        { /* this.state.loading ? 
            <ActivityIndicator size="large" color="#6ca2f7" /> : 
            this.state.error ? 
              <Text style={styles.error}>Ops... Deu erro :(</Text> : 
              <PeopleList 
                peoples={this.state.peoples} 
                onPressItem={(pageParams) => {
                  this.props.navigation.navigate('PeopleDetail', pageParams)
                }}
              /> 
              */ }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 20
  }
});