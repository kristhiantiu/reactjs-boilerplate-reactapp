import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
  login,
  logout
} from '../../actions/auth';

test('should setup startLogin action object', () => {
  const uid = '123abc';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  })
});

test('should setup startLogin action object', () => {
  const uid = '123abc';
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  })
});