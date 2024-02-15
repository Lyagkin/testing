"use strict";

const data = {
  services: [
      {
          "id": 1,
          "head": null,
          "name": "Проф.осмотр",
          "node": 0,
          "price": 100.0,
          "sorthead": 20
      },
      {
          "id": 2,
          "head": null,
          "name": "Хирургия",
          "node": 1,
          "price": 0.0,
          "sorthead": 10
      },
      {
          "id": 3,
          "head": 2,
          "name": "Удаление зубов",
          "node": 1,
          "price": 0.0,
          "sorthead": 10
      },
      {
          "id": 4,
          "head": 3,
          "name": "Удаление зуба",
          "node": 0,
          "price": 800.0,
          "sorthead": 10
      },
      {
          "id": 5,
          "head": 3,
          "name": "Удаление 8ого зуба",
          "node": 0,
          "price": 1000.0,
          "sorthead": 30
      },
      {
          "id": 6,
          "head": 3,
          "name": "Удаление осколка зуба",
          "node": 0,
          "price": 2000.0,
          "sorthead": 20
      },
      {
          "id": 7,
          "head": 2,
          "name": "Хирургические вмешательство",
          "node": 0,
          "price": 200.0,
          "sorthead": 10
      },
      {
          "id": 8,
          "head": 2,
          "name": "Имплантация зубов",
          "node": 1,
          "price": 0.0,
          "sorthead": 20
      },
      {
          "id": 9,
          "head": 8,
          "name": "Коронка",
          "node": 0,
          "price": 3000.0,
          "sorthead": 10
      },
      {
          "id": 10,
          "head": 8,
          "name": "Слепок челюсти",
          "node": 0,
          "price": 500.0,
          "sorthead": 20
      }
  ]
};

document.addEventListener("DOMContentLoaded", () => {

  const parentUl = document.querySelector("#tree");

  function threeRecursive(data, parentId = null, level = 0){
    const services = data.services.filter(item => item.head === parentId);
    const ul = document.createElement("ul");
    services.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.name + " (" + item.price + ")";
      ul.appendChild(li);

      if(item.node === 1) {
        const nestedUl = threeRecursive(data, item.id, level + 1);

        if(nestedUl.children.length > 0) {
          li.appendChild(nestedUl);
        }
      }
    });

    return ul;
  }


  parentUl.appendChild(threeRecursive(data));

});

