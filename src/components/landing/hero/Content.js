import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import './Content.css'
import Progress from '../progress/Progress'

const Content = () => {
   const styles = {
    imageContent1:{
        backgroundImage:'url(images/bg2.jpg)',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:600,
        display:'flex',
        alignItems:'center',
        padding:10
    },
    imageContent2:{
        backgroundImage:'url(images/bg3.jpg)',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:600,
        display:'flex',
        alignItems:'center',
        padding:10
    },
    heroText:{
        color:"white",
    },
    primaryText:{
        fontSize:64,
        fontFamily: "Tenor Sans",
        fontStyle: "normal",
        fontWeight: "400",
        letterSpacing:3,
        padding:10,
        
    },
    secondaryText:{
        fontSize:25,
        fontFamily: "Tenor Sans",
        fontStyle: "normal",
        marginBottom:20,
        marginLeft:20

    },
    heroButtons: {
        padding:10
    },
    heroBtn:{
        textDecoration:"none",
        padding:10,
        backgroundColor:"black",
        color:"white",
        textTransform: "uppercase",
        margin:20,
        width:300,
        fontFamily: "Tenor Sans",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize:20,
        letterSpacing:2,

    }
   }

    return (
        <div className='hero-page'>
            <div className='hero-img'>
                <AliceCarousel autoPlay autoPlayInterval="5000" animationEasingFunction="ease" disableDotsControls disableButtonsControls infinite>
                    <div className='hero-image-content1' style={styles.imageContent1}>
                        <div className='hero-image-text' style={styles.heroText}>
                            <h1 style={styles.primaryText}>SUMMER VIBES</h1>
                            <p></p>
                            <a href="" className='hero-image-btn' style={styles.heroBtn}>Shop All</a> 
                        </div>
                    </div>
                    <div className='hero-image-content1' style={styles.imageContent2}>
                        <div className='hero-image-text' style={styles.heroText}>
                            <h1 style={styles.primaryText}>SPRING <br /> STYLE</h1>
                            <p style={styles.secondaryText}>Fresh looks for sunny days.</p>
                            <div className='hero-image-buttons' style={styles.heroButtons}>
                                <a href="" className='hero-image-btn' style={styles.heroBtn}>Shop ALL</a>
                                <a href="" className='hero-image-btn' style={styles.heroBtn}>Shop Tops</a>
                                
                            </div>
                            
                        </div>
                    </div>

                </AliceCarousel>
                <div className='progress-bar'>
                    <Progress />
                </div>
            </div>
            </div>
    )
}

export default Content
