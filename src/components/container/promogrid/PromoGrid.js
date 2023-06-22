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

const PromoGrid = () => {
    const styles = {
        indexContent1: {
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(images/bg3.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 600,
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center'
        },
        indexContent2: {
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(images/bg3.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 600,
            display:'flex',
            textAlign:'center',
            alignItems: 'flex-end',
            justifyContent: 'center',


        },
        indextext: {
            color: "#ffffff"
        },
        secondaryText: {
            fontSize: 25,
            fontFamily: "Tenor Sans",
            fontStyle: "normal",
            textTransform: "uppercase",
        },
        primaryText: {
            fontSize: 64,
            fontFamily: "Tenor Sans",
            fontStyle: "normal",
            fontWeight: "400",
            textTransform: "uppercase",

        },
        heroBtn: {
            textDecoration: "none",
            padding: 10,
            backgroundColor: "#585065",
            color: "white",
            textTransform: "uppercase",
            margin: 20,
            width: 300,
            fontFamily: "Tenor Sans",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: 20,
            letterSpacing: 2,

        }


    }
    const callouts = [
        {
          name: 'Desk and Office',
          description: 'Work from home accessories',
          imageSrc: 'images/bg3.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '#',
        },
        {
          name: 'Self-Improvement',
          description: 'Journals and note-taking',
          imageSrc: 'images/bg3.jpg',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        
      ]

    return (
        <div className="bg-white">
        <div className="mx-auto  px-4 sm:px-6 ">
          <div className="mx-auto max-w-2xl  lg:max-w-none ">  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                <div className="group relative">
                  <div  className=" relative h-140 w-full overflow-hidden  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-152">
                  <div className='index-content' style={styles.indexContent1}>
                            <div style={styles.indextext}>
                                <p style={styles.secondaryText}>FRESH LOOKS</p>
                                <h1 style={styles.primaryText}>FALL ACCESSORIES</h1>
                                <div className='hero-image-buttons' style={styles.heroButtons}>
                                    <a href="" className='hero-image-btn' style={styles.heroBtn}>Shop ALL</a>
                                    <a href="" className='hero-image-btn' style={styles.heroBtn}>Shop Tops</a>

                                </div>
                            </div>

                        </div>
                        
                  </div>
                </div>
                <div className="group relative">
                  <div  className=" relative h-140 w-full overflow-hidden  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-140">
                  <div className='index-content' style={styles.indexContent1}>
                            

                        </div>
                        
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
  
    )
}

export default PromoGrid
