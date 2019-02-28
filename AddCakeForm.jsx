import React from 'react';

class AddCakeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image: "",
      title: "",
      desc: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageSrcChange = this.handleImageSrcChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleImageSrcChange(event){
    this.setState({ image: event.target.value });
  }

  handleTitleChange(event){
    this.setState({ title: event.target.value });
  }

  handleDescriptionChange(event){
    this.setState({ desc: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render(){
     return (
       <div id="add-cake-container">
         <h3 id="add-cake-form-title">Add Cake</h3>
         <form id="add-cake-form">
           <input className="cake-form-text-input" type="text" placeholder="Image Source" onChange={this.handleImageSrcChange} />
           <input className="cake-form-text-input" type="text" placeholder="Title" onChange={this.handleTitleChange} />
           <textarea className="cake-form-text-input" type="text" placeholder="Description" onChange={this.handleDescriptionChange} />
           <input className="submit-button" type="submit" value="Submit" onClick={this.handleSubmit} />
         </form>
       </div>
     );
  }
}

export default AddCakeForm;
