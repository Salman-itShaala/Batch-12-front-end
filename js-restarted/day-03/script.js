function sendReq() {
  // get
  const res = fetch("https://dummyjson.com/users");

  res
    .then((data) => data.json())
    .then((obj) => {
      console.log(obj);
    })
    .catch((err) => console.log(err));
}

// async and await

const myOl = document.getElementById("my-ol");

async function sendReq2() {
  const res = await fetch("https://dummyjson.com/users");

  const data = await res.json();

  // obj --> {users : [], .... }
  //const users = data.users;
  const { users } = data;

  console.log(users);

  users.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = element.firstName;

    li.classList.add("my-li");

    myOl.append(li);
  });
}
