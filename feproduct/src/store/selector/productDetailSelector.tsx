import { RootStateOrAny  } from 'react-redux';
export const getLoading = (state: RootStateOrAny) => state?.productDetail?.loading;
export const getDetail = (state: RootStateOrAny) => state?.productDetail?.list;
export const getOptionProductDetail = (state: RootStateOrAny) => state?.productDetail?.option;