import { useEffect, useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  // console.log(mockData.results)
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const [orders, setOrders] = useState(mockData.header.returnedHits);
  const [visible, setVisible] = useState(false);
  const [idfromSearch, setIdfromSearch] = useState(false);
  const ids = [];
  for (let i = 0; i < mockData.results.length; i++) {
    ids[i] = mockData.results[i]["&id"];
  }

  useEffect(() => {
    if (searchText) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [searchText]);

  const handleDatafromChild = (index) => {
    //Setting the order details for the selected id
   
          setSelectedOrderDetails(mockData.results[index].executionDetails);
      
    //Setting the timeStamp data for the selected id
   
          setSelectedOrderTimeStamps(timestamps.results[index].timestamps);
     
  };

  const handleList = (index)=>{
    setSelectedOrderDetails(mockData.results[index].executionDetails)
    setSelectedOrderTimeStamps(timestamps.results[index].timestamps)
  }

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={orders} />
        <div className={styles.actionBox}>
          <div className={styles.search}>
            <Search
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div
              className={styles.searchOptions}
              style={{
                display: `${visible ? "flex" : "none"}`,
              }}
            >
              <ul style={{ listStyleType: "none" }} className={styles.listUL}>
                {ids
                  .filter((id) => id.includes(searchText.toUpperCase()))
                  .map((id,index) => (
                    <li
                      key={index}
                      className={styles.listItem}
                      onClick={(e)=>handleList(index)}
                    >
                      {id}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List
          onDatafromChild={handleDatafromChild}
          rows={mockData.results}
          currency={currency}
        />
      </div>
    </div>
  );
};

export default Dashboard;
