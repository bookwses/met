import React from 'react'
import styles from './Portfoilo.module.css'
import Tilt from 'react-parallax-tilt';

function Portfoilo() {
    return (
        <div className={styles.port_con}>
            <h3 className={styles.port_title}>Porfolio</h3>
            <div className={styles.port_list}>
                <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbmV0fGVufDB8fDB8fHww" alt="" />
                    </Tilt>
                    <p>projec Title</p>
                </div>
                <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbmV0fGVufDB8fDB8fHww" alt="" />
                    </Tilt>
                    <p>projec Title</p>
                </div>
                <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbmV0fGVufDB8fDB8fHww" alt="" />
                    </Tilt>
                    <p>projec Title</p>
                </div>
                <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbmV0fGVufDB8fDB8fHww" alt="" />
                    </Tilt>
                    <p>projec Title</p>
                </div>
                <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbmV0fGVufDB8fDB8fHww" alt="" />
                    </Tilt>
                    <p>projec Title</p>
                </div>
                <div className={styles.port_items}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbmV0fGVufDB8fDB8fHww" alt="" />
                    </Tilt>
                    <p>projec Title</p>
                </div>
            </div>
        </div>
    )
}

export default Portfoilo
