import create from 'zustand';

const useStore = create(set => ({
  currentUserToken: null,

  setAuthToken: (token) => {
    console.log('setAuthToken', token);
    set({currentUserToken: token});
  }
}));

export default useStore;