// class catApi {
//   static getAllCats() {
//     return fetch('http://localhost:5000/api/v1/cats')
//       .then(response => response.json())
//       .catch(error => error)
//   }
// }

let cats = [
  {
   id: "1", 
   name: "Moe",
   breed: 'siameese', 
   weight: "heavy", 
   temperament: "protective", 
   hobby_ids: ["1", "2"]
  },
  {
   id: "2", 
   name: "Mini", 
   breed: 'no breed',
   weight: "heavy", 
   temperament: "sweet", 
   hobby_ids: ["1"]
  }
];

class catApi {
  static getAllCats() {
    return new Promise(resolve => resolve(cats))
  }

  static updateCat(cat) {
    cats = [
      ...cats.filter(catItem => catItem.id != cat.id),
      Object.assign({}, cat)
    ];
    return new Promise(resolve => resolve(cat))
  }
}

export default catApi;


