import { Box, Grid, Paper, styled } from '@mui/material'
import React from 'react'
import '../index/IndexSection.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AccessoryCard = () => {
    const styles = {
        indexContent1: {
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(images/promo.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 600,
            display: 'flex',
            textAlign: 'end',
            justifyContent: 'end',
            padding:40
        },
        
        indextext: {
            color: "#ffffff"
        },
        secondaryText: {
            fontSize: 21,
            fontFamily: "Tenor Sans",
            fontStyle: "normal",
            fontWeight: "200",
            textTransform: "uppercase",
            letterSpacing:8
        },
        primaryText: {
            fontSize: 64,
            fontFamily: "Tenor Sans",
            fontStyle: "normal",
            fontWeight: "400",
            textTransform: "uppercase",

        },
        thirdText:{
            fontSize: 20,
            fontFamily: "Tenor Sans",
            fontStyle: "normal",
            fontWeight: "400",

        },
        heroBtn: {
            textDecoration: "none",
            padding: 10,
            backgroundColor: "#585065",
            color: "white",
            textTransform: "uppercase",
            marginTop: 40 ,
            marginLeft:30,
            width: 300,
            fontFamily: "Tenor Sans",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 20,
            letterSpacing: 2,

        },
        heroButtons :{
            marginTop: 20 ,
        }


    }

    return (
        <div className="bg-white">
        <div className="mx-auto  px-4 sm:px-6 ">
          <div className="mx-auto max-w-2xl  lg:max-w-none ">  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-6 lg:space-y-0">
                <div className="group relative">
                  <div  className=" relative h-140 w-full overflow-hidden  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-152">
                  <div className='index-content' style={styles.indexContent1}>
                            <div style={styles.indextext}>
                                <p style={styles.secondaryText}>FRESH LOOKS</p>
                                <h1 style={styles.primaryText}>FALL ACCESSORIES</h1>
                                <p style={styles.thirdText}>Get the perfect look for your fall wardrobe.</p>
                                <p style={styles.thirdText}>From the city to the festival to campus.</p>

                                <div className='hero-image-buttons' style={styles.heroButtons}>
                                    <a href="" className='hero-image-btn' style={styles.heroBtn}>Shop ALL</a>
                                    <a href="" className='hero-image-btn' style={styles.heroBtn}>Shop Bags</a>

                                </div>
                            </div>

                        </div>
                        
                  </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    )
}

export default AccessoryCard
