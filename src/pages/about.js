import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'

export default function About() {
    return (
        <Layout>
            <h1 className={styles.fadeInDown}>About</h1>
            <p className={styles.zoomIn}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, ut.</p>
            <p className={styles.zoomIn}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis praesentium nobis recusandae inventore maiores. Sed ab ipsam expedita neque cumque, magni possimus suscipit quam aliquam tenetur sint atque voluptatem repudiandae at, porro a, corrupti velit beatae minima perspiciatis? Dolores assumenda maiores, incidunt quod doloremque harum soluta qui officia tempora perspiciatis aliquid fuga consectetur voluptatum repellat ex nesciunt iure, voluptas nemo ducimus explicabo fugiat nihil. Totam iste, ex sequi similique laborum explicabo veniam eos, aliquid ipsam nemo illum magni commodi perferendis iure mollitia animi necessitatibus facilis natus neque! Expedita sapiente, dolorum porro laborum modi aperiam doloremque! Iste ratione voluptas corporis placeat.</p>
        </Layout>
    )
}
