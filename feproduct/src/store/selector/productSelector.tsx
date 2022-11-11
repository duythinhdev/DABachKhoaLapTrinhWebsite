import { RootStateOrAny  } from 'react-redux';
export const loading = (state: RootStateOrAny) => state?.product?.loading;
export const getProduct = (state: RootStateOrAny) => state?.product?.list;