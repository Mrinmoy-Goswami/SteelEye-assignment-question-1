// import ListRow from "./ListRow";
import ListCell from "./ListRow";
import ListRowCell from "./ListRowCell";
import timestamp from '../../assets/timeStamps.json'
import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";
import { useState } from "react";

const List = ({ rows,currency,onDatafromChild }) => {

  // const [data,setData] = useState({});
  // const [id,setId] = useState()

 
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody >
        {rows.map((row,index) => (
          <ListCell key={index}  onDatafromChild = {onDatafromChild} index={index} >
            <ListRowCell >{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{timestamp.results[0].timestamps.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
          </ListCell>
        ))}
      </tbody>
    </table>
  );
};

export default List;
