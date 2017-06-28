// class HobbyApi {
//   static getAllHobbies() {
//     return fetch('https://localhost:5000/api/v1/hobbies')
//       .then(response => response.json())
//       .catch(error => error)
//   }
// }

const hobbies = [
  {
    id: "1",
    name: 'reading'
  },
  {
    id: '2',
    name: 'singing'
  },
  {
    id: '3',
    name: 'travelling'
  },
  {
    id: '4',
    name: 'hiking'
  }
];

class HobbyApi {
  static getAllHobbies() {
    return new Promise((resolve) => resolve(hobbies))
  }
}

export default HobbyApi;
