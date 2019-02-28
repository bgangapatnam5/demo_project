import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
  }

  capitalise(str){
    if (str !== undefined){
      const arr = str.split("");
      arr[0] = arr[0].toUpperCase();
      return arr.join("");
    }
  }

  render(){
    let cake = this.props.data;
    return (
      <section className="list-item" key={this.props.index}>
        <img className="cake-image" src={cake.image} />
        <div className="cake-item-details">
          <p className="cake-title">{this.capitalise(cake.title)}</p>
          <p className="cake-description">{this.capitalise(cake.desc)}</p>
        </div>
      </section>
    );
  }

}

export default ListItem;
