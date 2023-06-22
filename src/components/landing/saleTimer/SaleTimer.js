import React from 'react'
import './SaleTimer.css'
import Timer from './Timer'

const SaleTimer = () => {

    const styles = {
        countDownBanner: {
            color: "black",
            backgroundColor: "#D9DBDD",
            height: 180,


        },
        countDownContent:{
            display:"flex",
            alignItems: 'center',
            justifyContent:"space-evenly",
            height: 180,


        }
        
    }

    return (
        <div style={styles.countDownBanner}>
            <div style={styles.countDownContent}>
                <div style={styles.countDownContentBlock}>
                        <div style={styles.countDownHeading} className='count-down-heading'>
                            <h1>Flash Sale</h1>
                        </div>
                        <div style={styles.countDownrichText}>
                            <p>get 20% off if you spend 120$ or more!</p>
                        </div>
                </div>
                <div style={styles.countDownContentBlock}>
                        {/* <div style={styles.countDownHeading}>
                            <h1>Flash Sale</h1>
                        </div>
                        <div style={styles.countDownrichText}>
                            <p>get 20% off if you spend 120$ or more!</p>
                        </div> */}
                        <Timer />
                </div>
            </div>
        </div>
    )
}

export default SaleTimer
