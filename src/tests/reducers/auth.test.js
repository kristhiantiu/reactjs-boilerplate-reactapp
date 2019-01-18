import authReducer from '../../reducers/auth';

test('should set login', () => {
  const uid = '123abc';
  const action = {
    type: 'LOGIN',
    uid
  };
  
  const state = authReducer({}, action);
  expect(state).toEqual({uid});
});


test('should unset login', () => {
  const action = {
    type: 'LOGOUT'
  };
  
  const state = authReducer({}, action);
  expect(state).toEqual({});
});