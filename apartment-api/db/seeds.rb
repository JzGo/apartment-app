user_attributes = [
  {
    name: 'Jill',
    email: 'jill@example.com',
    password: 'secret',
    password_confirmation: 'secret'
  },
  {
    name: 'Bob',
    email: 'bob@example.com',
    password: 'password',
    password_confirmation: 'password'
  }
]

user_attributes.each do |attributes|
  User.create(attributes)
end
