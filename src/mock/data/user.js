import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'frodo',
    password: '123456',
    avatar: 'https://avatars2.githubusercontent.com/u/7484982?v=4&u=b5568a588d8c96fa24ba8b0d044d3ee6c370ef24&s=400',
    name: 'frodo'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
