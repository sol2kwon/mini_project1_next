import styles from "@/styles/Home.module.css";
export function Home() {

    return (
        <div className={styles.w3content} style={{maxwidth:1500}}>
        <div className={styles.w3row}>
        <div className={styles.w3half}>
          <img src="https://www.w3schools.com/w3images/streetart.jpg" style={{width:600}}/>
          <img src="https://www.w3schools.com/w3images/streetart3.jpg" style={{width:450}}/>
          <img src="https://www.w3schools.com/w3images/streetart4.jpg" style={{width:800}}/>
        </div>
    
        <div className={styles.w3half}>
          <img src="https://www.w3schools.com/w3images/streetart5.jpg" style={{width:450}}/>
          <img src="https://www.w3schools.com/w3images/streetart2.jpg" style={{width:600}}/>
        </div>
      </div>
      </div>

      
    )
}