import {Box,Card,Typorgraphy } from '@mui/material';

export default function App() {

  return (
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          width={'100vw'}
          height={'100vh'}
          //paddingX={'16px'}
          bgcolor={'red'}
        >
          <Card
            sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            marginTop: '146px'
          }}  
          >
       
        {/* Titulo */}
       <Box>
        <Typorgraphy Variant='h5' fontWeight={'700'}>

        </Typorgraphy>
        
        calculadora imc 
       
       </Box>
     
     {/* Entrada */} 
     <Box>

     </Box>

     {/* saida */}
     <Box>

     </Box>

<Card/> 
</Box>

    )
}



