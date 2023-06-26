import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './GridCards.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function OfferCards() {
    const styles = {
        countDownBanner: {
            color: "black",
            height: 220,
            border: "2px solid black"


        },
        countDownContent: {
            display: "flex",
            alignItems: 'center',
            justifyContent: "space-between",
            height: 220,


        },
        countDownContentBlock:{
            marginLeft:10
        }




    }


    const products = [
        {

            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        },
        {

            id: 2,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        },

    ]
    return (
        <Box sx={{ flexGrow: 1 }} className='offer-card-box'>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Item>
                    <div style={styles.countDownBanner}>
                            <div style={styles.countDownContent}>
                                <div style={styles.countDownContentBlock}>
                                    <div className='count-down-text'>
                                        <p>Up To</p>
                                    </div>
                                    <div style={styles.countDownHeading} className='offer-perc'>
                                        50
                                        <sup>%</sup>
                                        <small>OFF</small>
                                    </div>
                                    <div className='offer-product-name'>
                                        Select Products
                                    </div>
                                </div>
                                <div style={styles.countDownContentBlock}>
                                        <div className="mx-auto max-w-2xl  py-28    ">
                                            <div className="mt-0 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 ">
                                                {products.map((product) => (
                                                    <div key={product.id} className="group relative">
                                                        <div className="aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-md bg-gray-500 lg:aspect-none  h-52 ">
                                                            <img
                                                                src={product.imageSrc}
                                                                alt={product.imageAlt}
                                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform ease-out duration-300 hover:scale-105"
                                                            />
                                                            
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item>
                        <div style={styles.countDownBanner}>
                            <div style={styles.countDownContent}>
                                <div style={styles.countDownContentBlock}>
                                    <div className='count-down-text'>
                                        <p>Up To</p>
                                    </div>
                                    <div style={styles.countDownHeading} className='offer-perc'>
                                        50
                                        <sup>%</sup>
                                        <small>OFF</small>
                                    </div>
                                    <div className='offer-product-name'>
                                        Select Products
                                    </div>
                                </div>
                                <div style={styles.countDownContentBlock}>
                                        <div className="mx-auto max-w-2xl  py-28    ">
                                            <div className="mt-0 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2 ">
                                                {products.map((product) => (
                                                    <div key={product.id} className="group relative">
                                                        <div className="aspect-h-1 aspect-w-1 w-full  overflow-hidden rounded-md bg-gray-500 lg:aspect-none h-52 ">
                                                            <img
                                                                src={product.imageSrc}
                                                                alt={product.imageAlt}
                                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform ease-out duration-300 hover:scale-105"
                                                            />
                                                            
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}