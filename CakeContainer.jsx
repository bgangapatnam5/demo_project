import React from 'react';
import CakeList from '../components/CakeList';

class CakeContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cakes: [],
      displayedCakes: []
    }
    this.handleAddCake = this.handleAddCake.bind(this);
  }

  componentDidMount(){
    const url = "https://gist.githubusercontent.com/hart88/198f29ec5114a3ec3460/raw/8dd19a88f9b8d24c23d9960f3300d0c917a4f07c/cake.json";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', () => {
      if (xhr.status === 200){
        const jsonString = xhr.responseText;
        const apiData = JSON.parse(jsonString);
        console.log(apiData);
        this.setState({ cakes: apiData, displayedCakes: apiData });
      }
    });
    xhr.send();
  }

  handleAddCake(props){
    const newCake = [props];
    const displayedCakes = this.state.displayedCakes.concat(newCake);
    this.setState({ displayedCakes: displayedCakes });
  }

  render(){
    return (
      <CakeList data={this.state.displayedCakes} addCake={this.handleAddCake} />
    );
  }
}

export default CakeContainer;
