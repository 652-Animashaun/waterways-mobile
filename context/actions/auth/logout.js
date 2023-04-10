import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT_USER} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosinterceptor';

export default () => (dispatch) => {

  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  dispatch({
    type: LOGOUT_USER,
});

};


  // to implement server logout
  // axiosInstance.get('logout')
  // .then((res)=>{
  //   console.log(res.data)
  //   AsyncStorage.removeItem('token');
  //   AsyncStorage.removeItem('user');
  //   dispatch({
  //     type: LOGOUT_USER,
  // });
  // })