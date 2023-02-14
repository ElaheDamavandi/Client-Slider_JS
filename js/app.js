// Grab elements functions
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Somthing went wrong, make sure that ${selector} exists or is typed correctly.`
  );
};

const selectAllElements = (selector) => {
  const element = document.querySelectorAll(selector);
  if (element) return element;
  throw new Error(
    `Somthing went wrong, make sure that ${selector} exists or is typed correctly.`
  );
};

//Grabbing Elements
const imgCustmer = selectElement("#customer-img");
const customerName = selectElement("#customer-name");
const customerDescription = selectElement("#customer-text");
const buttons = selectAllElements(".btn");

let index = 0;
const customersList = [];

//Constructor function
let Person = function (name, description, img) {
  this.name = name;
  this.description = description;
  this.img = img;
};

//Using constructor function for making obj
const createCustomer = (name, description, img) => {
  img = `./img/customer-${img}.jpg`;
  customersList.push(new Person(name, description, img));
};


createCustomer(
  "John",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?",
  0
);
createCustomer(
  "Sandy",
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
  1
);
createCustomer(
  "Amy",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  2
);
createCustomer(
  "Tyrell",
  "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  3
);
createCustomer(
  "Wanda",
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  4
);

//Control counter functions
const prevBtn = () => {
  if (index === 0) {
    index = customersList.length;
  }
  index--;
  imgCustmer.src = customersList[index].img;
  customerName.textContent = customersList[index].name;
  customerDescription.textContent = customersList[index].text;
};
const nextBtn = () => {
  index++;
  if (index === customersList.length) {
    index = 0;
  }
  imgCustmer.src = customersList[index].img;
  customerName.textContent = customersList[index].name;
  customerDescription.textContent = customersList[index].description;
};

//Give every buton eventHandler (left and right buttons)
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button);
    if (button.classList.contains("btn-left")) {
      prevBtn();
    } else {
      nextBtn();
    }
  });
});
