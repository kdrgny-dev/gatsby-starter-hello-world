import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
    return (
        <Layout>
            <div className={`${styles.fadeIn} ${styles.home_wrapper}`}>
                <h1>Web Panda says;</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae expedita ea ex nemo dolorem accusamus adipisci corrupti, aut ipsum aliquid?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, velit.</p>
                <p className={styles.white}>Lorem, ipsum dolor.</p>
            </div>
        </Layout>
    )
}
