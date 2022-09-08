import React, { useState, useEffect } from "react";
import ExpenceDetail from "./expence/ExpenceDetail";
import ExpenceForm from "./expence/ExpenceForm";
import Chart from "./chart/Chart";
import "./List.css";

const List = () => {
  const [listItems, setListItems] = useState([
    { title: "new title", date: new Date("2015-03-25"), price: 98.43 },
  ]);
  const [subsetList, setSubsetList] = useState(listItems);
  const [selectedValue, setSelectedValue] = useState(-1);
  const [addNewItem, setAddNewItem] = useState(false);

  const cancelFormHandler = () => {
    setAddNewItem(false);
  };
  const submitFormHandler = (newItem) => {
    console.log("neww ", newItem);
    setListItems((prevState) => {
      return [newItem, ...prevState];
    });
  };

  const handleSelectedChange = (event) => {
    console.log(event.target.value);
    setSelectedValue(parseInt(event.target.value));
  };

  useEffect(() => {
    let newSubsetList = listItems.filter((listItem) => {
      let date = listItem.date.toDateString();
      let dateSub = date.split(" ");
      console.log(dateSub[3]);
      return selectedValue === parseInt(dateSub[3]) || selectedValue === -1;
    });
    setSubsetList(newSubsetList);
  }, [selectedValue, listItems]);

  let yearsOptions = Array.from({ length: 10 }, (_, i) => -1 * i + 2023).map(
    (year) => <option value={year}>{year}</option>
  );

  let listContent = <h3>no items found!</h3>;
  if (subsetList.length > 0) {
    listContent = subsetList.map((listItem, index) => (
      <ExpenceDetail key={index} listItem={listItem} />
    ));
  }
  const showForm = addNewItem ? (
    <ExpenceForm
      onSubmitForm={submitFormHandler}
      onCancelForm={cancelFormHandler}
    />
  ) : (
    <div className="form-parent">
      <button
        onClick={() => {
          setAddNewItem(true);
        }}
      >
        Add new item
      </button>
    </div>
  );

  // useEffect(() => {
  //   listItems.forEach(element => {

  //   });
  //   setChartData
  //   listItems.map(item => {value:item.})
  // },[])

  return (
    <React.Fragment>
      {showForm}

      <div className="list">
        <div className="year-filter">
          <span>filter by: </span>
          <select value={selectedValue} onChange={handleSelectedChange}>
            <option value={-1}>all</option>
            {yearsOptions}
          </select>
        </div>
        <Chart subsetList={subsetList} />
        {listContent}
      </div>
    </React.Fragment>
  );
};

export default List;
