import React from 'react';
import { connect } from 'react-redux';
import Category from '../components/Category';

function CategoriesList({categories}) {
  return (
    <div id="categoryList">
      {
        categories.map(({id, name, total, limit}) => (
          <Category 
            name={name} 
            total={total}
            limit={limit}
            id = {id}
          />
        ))
      }
    </div>
  );
}

const mapStateToProps = ({categories}) => ({categories});

export default connect(
  mapStateToProps,
)(CategoriesList);