import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
    return (
        <div className={styles.testi_con}>
            <h3 className={styles.testi_title}>Testimonials</h3>
            <div className={styles.testi_list}>
                <div className={styles.testi_items}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                    </p>
                    <img src="https://media.istockphoto.com/id/1469706471/photo/computer-coding-programming-and-asian-man-in-cybersecurity-software-development-and-html.webp?a=1&b=1&s=612x612&w=0&k=20&c=yEXLR2wxKga-P-UEoGy2nlIWBYvarKxKuwaB-rZE9VM=" alt="" />
                    <h4>John Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>
                <div className={styles.testi_items}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                    </p>
                    <img src="https://media.istockphoto.com/id/1469706471/photo/computer-coding-programming-and-asian-man-in-cybersecurity-software-development-and-html.webp?a=1&b=1&s=612x612&w=0&k=20&c=yEXLR2wxKga-P-UEoGy2nlIWBYvarKxKuwaB-rZE9VM=" alt="" />
                    <h4>John Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>
                <div className={styles.testi_items}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.
                    </p>
                    <img src="https://images.unsplash.com/photo-1514543250559-83867827ecce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbiUyMGNvZGV8ZW58MHx8MHx8fDA%3D" alt="" />
                    <h4>John Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
