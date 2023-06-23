import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import './AllPromoCards.css'

const NewProductPromo = () => {
    const styles = {
        indexContent1: {
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(images/bg3.jpg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start'
        },
    }
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    const card = (
        <React.Fragment>
            <CardContent className='new-look-card-content'>
                <Typography className='new-look-card-primary-text' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                    NEW FOR 2023
                </Typography>
                <Typography className='new-look-card-header' variant="h5" component="div">
                    BOUTIQUE STYLE
                </Typography>

                <Typography className='new-look-card-secondary-text' variant="body2">Fierce elegance is about authenticity, refinement, beauty and grace. It’s a powerful lady like class with a touch of sophisticated sass that creates a sleek and commanding presence.
                </Typography>
            </CardContent>
               <Typography className='new-look-card-button'>
                <Button size="small" className='uppercase text-white '>View LookBook</Button>
               </Typography>
        </React.Fragment>
    );
    return (
        <div className="bg-white">
            <div className="mx-auto">
                <div className="mx-auto max-w-2xl  lg:max-w-none ">
                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-6 lg:space-y-0">
                        <div className="group relative">
                            <div className=" relative h-140 w-full overflow-hidden  bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-152">
                                <div className='' style={styles.indexContent1}>
                                    <div className='ml-24'>
                                        <Box sx={{ maxWidth: 400, height: 400  }}>
                                            <Card variant="outlined">{card}</Card>
                                        </Box>
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

export default NewProductPromo
