import User from '../app/models/User'

test('Is should be ok', () => {
  const user = new User()

  user.name = 'Leandro'

  expect(user.name).toEqual('Leandro')
})
