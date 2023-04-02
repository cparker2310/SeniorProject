import { store } from '@risingstack/react-easy-state';
import api from '../../api/index';

const appStore = store({
  users: [],
  async getAllUsers() {
    appStore.isLoading = true;
    appStore.users = await api.getAllUsers();
    appStore.isLoading = false;
  },
});

export default appStore;