import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as catActions from '../../actions/catActions';
import CatList from './CatList';
import { Link, Route, withRouter, Switch } from 'react-router-dom';
import CatPage from './CatPage';
import NewCatPage from './NewCatPage';

const CatsPage = ({ cats, match }) => (
  <div className='col-md-12'>
    <h2>Cats</h2>
    <Link to={'/cats/new'} className='btn btn-primary'>{'+ cat'}</Link>
    <div className='col-md-4'>
      <CatList cats={cats} />
    </div>
    <div className='col-md-8'>
      <Switch>
        <Route exact path={`/cats/new`} component={NewCatPage} />
        <Route exact path={`/cats/:id`} component={CatPage} />
      </Switch>
    </div>
  </div>
)

CatsPage.propTypes = {
  cats: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  cats: state.cats
})

export default withRouter(connect(mapStateToProps)(CatsPage));
