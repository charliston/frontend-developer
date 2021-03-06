import * as types from './actionTypes';
import productApi from '../api/ProductApi';

export function loadFeaturedProductsSuccess(products) {
  return { type: types.LOAD_FEATURED_PRODUCTS_SUCCESS, products };
}

export function loadProductByIdSuccess(product) {
  return { type: types.LOAD_PRODUCTBY_ID_SUCCESS, product };
}

export function clearProduct() {
  return { type: types.CLEAR_PRODUCT };
}

export function loadProductSearchSuccess(products) {
  return { type: types.LOAD_PRODUCT_SEARCH_SUCCESS, products };
}

export function loadFeaturedProducts() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return productApi.getFeaturedProducts().then(products => {
      dispatch(loadFeaturedProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadProductById(productId) {
  return function(dispatch) {
    return productApi.getProductById(productId).then(product => {
      dispatch(loadProductByIdSuccess(product));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadProductSearch(query, ini = 0, limit = 11) {
  return function(dispatch) {
    return productApi.fullTextSearch(query, ini, limit).then(products => {
      dispatch(loadProductSearchSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}

