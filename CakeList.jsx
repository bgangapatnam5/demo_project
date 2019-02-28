import React from 'react';
import ListItem from './ListItem';
import AddCakeForm from './AddCakeForm';

class CakeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
    this.updateSearch = this.updateSearch.bind(this);
    this.handleAddCakeSubmit = this.handleAddCakeSubmit.bind(this);
  };

  updateSearch(event){
    this.setState({ search: event.target.value });
  }

  handleAddCakeSubmit(props){
    console.log("handleAddCakeSubmit", props);
    this.props.addCake(props);
  }

  render(){
    const unfilteredCakes = this.props.data;

    let filteredCakes = unfilteredCakes.filter( (cake) => {
        return cake.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    const cakes = filteredCakes.map( (cake, index) => {
      return (
        <ListItem data={cake} index={index} key={index} />
      );
    });
    return (
      <main>
        <section id="heading">
          <h1 id="list-title">Greeggs Bakery</h1>
          <input id="search-bar" placeholder="Cake Search" value={this.state.search} onChange={this.updateSearch} />
          <AddCakeForm onSubmit={this.handleAddCakeSubmit}/>
        </section>
        <section id="cake-list">
          {cakes}
        </section>
      </main>
    );
  }
}

export default CakeList;
