import { GetterTree } from 'vuex';

export const getters = {
  isLoggedIn: state => !!state.currentToken,
  isPending: state => state.loginStatus === LoginStatus.Pending? true : false,
  isSuccess: (state, geters) => state.loginStatus === LoginStatus.Success? true : false,
  isError: state => state.loginStatus === LoginStatus.Failed? true : false,
  isResetPending: state => state.resetStatus === LoginStatus.Pending? true : false,
  isResetSuccess: (state, geters) => state.resetStatus === LoginStatus.Success? true : false,
  isResetError: state => state.resetStatus === LoginStatus.Failed? true : false,
  isSupportPending: state => state.supportStatus === SupportStatus.Pending? true : false,
  isSupportSuccess: state => state.supportStatus === SupportStatus.Success? true : false,
  isSupportFailed: state => state.supportStatus === SupportStatus.Failed? true : false,
  token: state => state.currentToken,
  tokenData: (state, getters) => state.currentToken ? JSON.parse(atob(getters.token.split('.')[1])) : null,
  tokenSubject: (state, getters) => getters.tokenData ? getters.tokenData.sub : null,
  tokenIssuer: (state, getters) => getters.tokenData ? getters.tokenData.iss : null,
};

export default getters;