/** FEEDBACK: I love the use of functions here! Could we have made it DRYer? 
 * We also typically want to use our runner function so make sure you include that in the future!
 * Great job getting all test cases to pass!
 */

const headingAdder = () => {
    const heading = document.createElement("h1");
    heading.id = "main-heading";
    heading.textContent = "Hello World!";
    document.body.append(heading);
}
headingAdder();

const paraAdder = () => {
    const paraText = document.createElement('p');
    paraText.id = 'main-text';
    paraText.classList.add('boring-text');
    paraText.textContent = `Look, I'm some text!`;
    document.body.append(paraText);
}
paraAdder()


const paraText = document.createElement('p');
paraText.classList.add = 'boring-text';