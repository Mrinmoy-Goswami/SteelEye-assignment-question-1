import styles from "./ListRow.module.css";

const ListCell = ({ children,onDatafromChild,index }) => {


  const dataToParent = ()=>{
    onDatafromChild(index)
   
  }
  return <tr onClick={dataToParent} className={styles.cell}>
    
    {children}
    
    </tr>;
};

export default ListCell;
