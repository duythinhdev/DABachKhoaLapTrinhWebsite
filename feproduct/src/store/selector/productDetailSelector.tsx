import { RootStateOrAny  } from 'react-redux';
export const getDetail = (state: RootStateOrAny) => state.productDetail.list;
export const getOptionProductDetail = (state: RootStateOrAny) => state.productDetail.option;