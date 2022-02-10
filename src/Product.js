import React from 'react';
import handleModal from './handleModal';
import Modal from './Modal';

const Product = (props) => {
  return (
    <div className="col-12 col-md-3">
      <div className="product card" data-product={ props.content.id }>
        <img className="product-image card-img-top" src={ props.content.image } alt={ props.content.title }/>
        <div className="card-body">
          <h5 className="product-title card-title">{ props.content.title }</h5>
          <div className="d-flex justify-content-between">
            <span className="product-category">{ props.content.category }</span>
            <span className="product-price text-muted">{ props.content.price }</span>
          </div>
        </div>
        <button onClick={() => handleModal(props.content.id) }>More Details</button>
      </div>
      <Modal content={props.content}/>
    </div>
  );
}

export default Product;