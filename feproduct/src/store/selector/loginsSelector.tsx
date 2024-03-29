import { RootStateOrAny  } from 'react-redux';
export const userNames = (state: RootStateOrAny) => state?.logins?.userName;
export const loginLoading = (state: RootStateOrAny) => state?.logins?.loading;
export const token = (state: RootStateOrAny) => state?.logins?.token;