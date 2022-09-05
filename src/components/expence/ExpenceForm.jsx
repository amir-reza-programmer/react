import "./ExpenceForm.css";
import { useState } from "react";

const ExpenceForm = ({ onSubmitForm, onCancelForm }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setenteredPrice] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const priceHandler = (event) => {
    setenteredPrice(event.target.value);
  };
  const dateHandler = (event) => {
    setenteredDate(event.target.value);
  };

  // if it has to rely on previous value of state
  // setenteredPrice((prevState) => {
  //   return prevState + 2
  // })

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredTitle.length > 0 &&
      enteredPrice.length > 0 &&
      enteredDate.length > 0
    ) {
      const newItem = {
        title: enteredTitle,
        price: enteredPrice,
        date: new Date(enteredDate),
      };
      console.log(newItem);
      setEnteredTitle("");
      setenteredPrice("");
      setenteredDate("");
      onSubmitForm(newItem);
    }
  };

  return (
    <div className="expence-form-parent">
      <form onSubmit={submitHandler} action="" className="expence-form">
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            value={enteredTitle}
            onChange={titleHandler}
            minLength={3}
            type="text"
            name="title"
            id=""
          />
        </div>
        <div className="input-field">
          <label htmlFor="title">Price</label>
          <input
            value={enteredPrice}
            onChange={priceHandler}
            type="number"
            min={0.1}
            step={0.1}
            name="price"
            id=""
          />
        </div>
        <div className="input-field">
          <label htmlFor="date">Date</label>
          <input
            value={enteredDate}
            onChange={dateHandler}
            type="date"
            name="date"
            id=""
          />
        </div>
        <div className="form-buttons">
          <button className="btn" onClick={onCancelForm}>
            cancel
          </button>
          <input className="btn" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default ExpenceForm;
