import { RootStateOrAny  } from 'react-redux';
export const userNames = (state: RootStateOrAny) => state?.logins?.userName;