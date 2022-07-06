let list = [
  { id: "test1", password: "test1" },
  { id: "test2", password: "test2" },
];

function a(id) {
  return id;
}

function b() {
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    let obj = list[i];
    obj.password = "test3";

    newList.push(function () {
      return {
        id: obj.id,
        password: obj.password,
      };
    });
  }

  for (let i = 0; i < list.length; i++) {
    console.log(newList[i]());
  }
}

b();
