/** FEEDBACK: Great job getting all test cases to pass! */
const getMainHeadingText = () => {
  const heading = document.querySelector('#main-heading');
  console.log(heading.textContent);
};

const getAllMainText = () => {
  const mainText = document.querySelectorAll('.main-text');
  const text = [];
  mainText.forEach((x) => {
    text.push(x.textContent);
  });
  console.log(text.join(','));
};

const setSubtitleText = () => {
  const subtitle = document.querySelector('#subtitle');
  subtitle.textContent = "This is a subtitle!";
};

const modifyDivClassList = () => {
  let modifyClassList = document.querySelector('#modify-classes').classList;
  modifyClassList.remove("bad-class");
  modifyClassList.add("new-class");
};

const addH2 = () => {
  const heading2 = document.createElement("h2");
  heading2.id = 'h2-test'
  heading2.textContent = "Another one!";
  document.body.append(heading2);
};

const removeOldInfo = () => {
  const removedElement = document.querySelector('#old-info')
  removedElement.remove()
};

const makeAlphabet = () => {
  const letterAmount = document.querySelector("#alphabet").dataset.numLetters
  for (let i = 0; i < letterAmount; i++){
    const letter = String.fromCharCode(65+i)
    const listItem = document.createElement("li")
    listItem.textContent = `${letter} is letter #${i+1} in the alphabet`
    document.querySelector('#alphabet').append(listItem)
  }
};

const makeBio = () => {
  const bio = document.getElementById("my-bio").innerHTML = `
    <h2 id="bio-heading">About Me</h2>
    <p>My name is Zo and I like learn cool new things</p>
    <h3 id="hobby-heading">My Hobbies</h3>
    <ul>
      <li>Running</li>
      <li>Reading</li>
      <li>Writing</li>
    </ul>`
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
