import './App.css';

import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  // 랜덤으로 이미지를 보여주는 사이트
  'image': 'https://placeimg.com/64/64/1',
  'name': '조조',
  'birthday': '940101',
  'gender': '여자',
  'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '941212',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '미미',
    'birthday': '941010',
    'gender': '여자',
    'job': '대학생'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
          );
        })
      }
    </div>
  );
}

export default App;
