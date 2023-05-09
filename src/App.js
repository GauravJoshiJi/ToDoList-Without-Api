import React, { useState } from "react"; //Explanation is at the end of file.
const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]); //Creating empty array

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItems) => {
      //getting setItems into oldItems
      return [...oldItems, inputList]; //making an array and inserting the data
      //to inputList
    });
    setInputList("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItem}> + </button>

          <ol>
            {/* <li> {inputList} </li>  */}
            {Items.map((itemval) => {
              return <li> {itemval} </li>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;

// step 1 >
//jab user input field mai click kare to basicly ak empy array create ho jase
// or vo show hone k lia call ho jae.

// setp 2 >
//const [Items, setItems] = useState([]);
// ham ak empty array create kr rahe hai or oske data ko setItems se use karenge

// const listOfItem = () => {
//   setItems((oldItems) => {
//     return [...oldItems, inputList];
//   });
//   setInputList("");
// };
// issmai (oldItems) oper setItems se aa raha hai, to hm, return bhi ak
// array kr rahe hai, jismai ... se data, lakr ose inputList mai dal dinge jise ko
// voha neche update ho jae.
