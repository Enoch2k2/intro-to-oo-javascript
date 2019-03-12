// function User(username, age, hobby) {
//   this.username = username
//   this.age = age
//   this.hobby = hobby
//   User.all.push(this);
// };

class User {
  static all = []

  constructor(username, age, hobby) {
    this.username = username
    this.age = age
    this.hobby = hobby
    User.all.push(this);
  }

  render() {
    return `
      <tr>
        <td>${this.username}</td>
        <td>${this.age}</td>
        <td>${this.hobby}</td>
      </tr>
    `
  }

  static listUsers() {
    let list = document.getElementById('list')
    list.innerHTML = ''
    User.all.forEach(user => list.innerHTML += user.render());
  }
}

// User.prototype.render = function () {
//   return `
//   <tr>
//   <td>${this.username}</td>
//   <td>${this.age}</td>
//   <td>${this.hobby}</td>
//   </tr>
//   `
// }

// User.listUsers = function(){
//   let list = document.getElementById('list')
//   list.innerHTML = ''
//   User.all.forEach(user => list.innerHTML += user.render());
// }

// User.all = [];



function createUser() {
  // let user = {
  //   username: "something",
  //   age: 34,
  //   hobby: "plays xbox"
  // }
  let username = document.getElementById('username').value;
  let age = document.getElementById('age').value;
  let hobby = document.getElementById('hobby').value;


  let user = new User(username, age, hobby)

  document.getElementById('username').value = ''
  document.getElementById('age').value = ''
  document.getElementById('hobby').value = ''
  
  User.listUsers();
  
}