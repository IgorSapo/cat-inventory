import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as catActions from '../../actions/catActions';
import CatList from './CatList';
import { Route, withRouter } from 'react-router-dom';
import CatPage from './CatPage';

const CatsPage = ({ cats, match }) => (
  <div className='col-md-12'>
    <h2>Cats</h2>
    <div className='col-md-4'>
      <CatList cats={cats} />
    </div>
    <div className='col-md-8'>
      <Route path={`${match.url}/:id`} component={CatPage} />
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
