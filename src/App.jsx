import { Stack,Box, Center, Grid, GridItem } from '@chakra-ui/react'

function App() {
  
  return (
    <div style={ { display : "flex" , margin : "10px" }  }>
      <div >
            <Stack direction={['column', 'row']} gap="0px">
            <Box w='100px' h='400px' bg='yellow.200'>
              <Center marginTop="200px">NAV</Center>
            </Box>
            <Box w='200px' h='400px' bg='tomato'>
              <Center marginTop="200px">CONTENT</Center>
   
            </Box>
            <Box w='100px' h='400px' bg='pink.100'>
              <Center marginTop="200px">WIDGET</Center>
            </Box>
           </Stack>
      </div>
      <div style={ { border : "1px solid white" , width : "400px" , height : "300px", marginLeft : "20px" } }>
        <Grid
        height={300}
            templateRows='repeat(3, 1fr)'
            templateColumns='repeat(4, 1fr)' gap={4}>
              <GridItem rowSpan={2} colSpan={3} bg="purple.300"></GridItem>
              <GridItem rowSpan={3} colSpan={1} bg="orange.300"></GridItem>
              <GridItem rowSpan={1} colSpan={3} bg="blue.200"></GridItem>
              

        </Grid>
      
      </div>
      
    </div>
    
  )
}

export default App
