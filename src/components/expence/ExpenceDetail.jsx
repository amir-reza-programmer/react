import "./ExpenceDetail.css";
import ExpenceDetailTitle from "./ExpenceDetailTitle";
import ExpenceDetailPrice from "./ExpenceDetailPrice";
import ExpenceDetailDate from "./ExpenceDetailDate";

const ExpenceDetail = ({ listItem }) => {
  return (
    <div className="expence-detail">
      <div className="expence-detail__left">
        <ExpenceDetailDate dateString={listItem.date.toDateString()} />
        <ExpenceDetailTitle title={listItem.title} />
      </div>
      <div className="expence-detail__right">
        <ExpenceDetailPrice price={listItem.price} />
      </div>
    </div>
  );
};

export default ExpenceDetail;
