import styles from "@/styles/Header.module.css";
export function Header(){
    return(
      
        <header className={styles.w3container+''+styles.w3xlarge+''+styles.w3padding24}>
       <p class="w3-serif">
       <div className={styles.w3left}>
        <a href="#" ><b>MY ART</b></a>
        </div>
        <div className={styles.w3displaytopright}>
        <a href="#about"><b>가니</b></a>
        </div>
        </p>
      </header> 
          
    )
}