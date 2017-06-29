import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import getCatHobbies from '../../reducers/hobbyReducer';
import HobbyList from './HobbyList';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as catActions from '../../actions/catActions';
import CatForm from './CatForm';

class CatPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      cat: this.props.cat,
      catHobbies: this.props.catHobbies,
      checkBoxHobbies: this.props.checkBoxHobbies
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateCatState = this.updateCatState.bind(this);
    this.updateCatHobbies = this.updateCatHobbies.bind(this);
    this.saveCat = this.saveCat.bind(this);
    this.deleteCat = this.deleteCat.bind(this);
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }
  
  updateCatState(event) {
    const field = event.target.name;
    const cat = this.state.cat;
    cat[field] = event.target.value;
    return this.setState({
      cat
    })
  }

  updateCatHobbies(event) {
    const cat = this.state.cat;
    const hobbyId = event.target.value;
    const hobby = this.state.checkBoxHobbies.filter(hobby => hobby.id == hobbyId)[0];
    const checked = !hobby.checked;
    hobby['checked'] = !hobby.checked;
    if (checked) {
      cat.hobby_ids.push(hobby.id);
    } else {
      cat.hobby_ids.splice(cat.hobby_ids.indexOf(hobby.id));
    }
    this.setState({cat: cat});
  }

  saveCat(event) {
    event.preventDefault();
    this.props.actions.updateCat(this.state.cat);
    this.toggleEdit();
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.cat.id != nextProps.cat.id) {
      this.setState({cat: nextProps.cat})
    }
    if(this.props.checkBoxHobbies.length < nextProps.checkBoxHobbies.length) {
      this.setState({
        catHobbies: nextProps.catHobbies,
        checkBoxHobbies: nextProps.checkBoxHobbies
      })
    }
  }

  deleteCat(event) {
    this.props.actions.deleteCat(this.state.cat);
    this.props.history.push(`/cats/`);
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <h3>Edit cat</h3>
          <CatForm
            cat={this.state.cat}
            hobbies={this.state.checkBoxHobbies}
            onSave={this.saveCat}
            onChange={this.updateCatState}
            onHobbyChange={this.updateCatHobbies} />
        </div>
      )
    }
    return (
      <div className='col-md-8 col-md-offset-2'>
        <p>{this.state.cat.name}</p>
        <p>breed: {this.state.cat.breed}</p>
        <p>weight: {this.state.cat.weight}</p>
        <p>temperament: {this.state.cat.temperament}</p>
        <HobbyList hobbies={this.props.catHobbies} />
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={this.deleteCat}>Delete</button>
      </div>
    )
  }
}

CatPage.propTypes = {
  cat: PropTypes.object.isRequired,
  catHobbies: PropTypes.array.isRequired,
  checkBoxHobbies: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => {
  let cat = {
    name: '',
    breed: '',
    weight: '',
    temperament: '',
    hobby_ids: []
  };
  // const stateHobbies = Object.assign([], state.hobbies);
  let catHobbies = [];
  let checkBoxHobbies = [];

  const catId = ownProps.match.params.id;
  const getCatHobbies = (hobbies, cat) =>
    hobbies.filter(hobby => cat.hobby_ids.includes(hobby.id));
  const getCheckBoxHobbies = (hobbies, cat = null) => 
    hobbies.map(hobby => 
      Object.assign(
        {},
        hobby,
        { checked: !!cat ? cat.hobby_ids.includes(hobby.id) : false }
      )
    );

  if(catId && state.cats.length > 0 && state.hobbies.length > 0) {
    cat = Object.assign({}, state.cats.find(cat => cat.id === catId));
    console.log(cat);
    if (cat.hobby_ids.length > 0) {
      checkBoxHobbies = getCheckBoxHobbies(state.hobbies, cat);
      catHobbies = getCatHobbies(state.hobbies, cat);
    } else {
      checkBoxHobbies = getCheckBoxHobbies(state.hobbies);
    }
  }
  return {
    cat,
    catHobbies,
    checkBoxHobbies
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(catActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CatPage));
