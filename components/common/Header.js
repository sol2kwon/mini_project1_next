import styles from "@/styles/Header.module.css";
export function Header(){
    return(
      
        <header className={styles.w3container+''+styles.w3xlarge+''+styles.w3padding24}>
       <p class="w3-serif">
       <div className={styles.w3left}>
        <a href="#" ><b>내 삶을 바꾼 Q&A</b></a>
        </div>
      
        </p>
      </header> 
          
    )
}