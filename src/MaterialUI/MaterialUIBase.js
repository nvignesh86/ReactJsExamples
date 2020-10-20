import React,{useState} from 'react';
import {AppBar,Tabs,Tab,Box,Typography} from '@material-ui/core';
import MyButton from './MyButton';

function TabPanel(props) {
    const { children, value, index, } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
      >
        {value === index && (
          <Box minHeight={"100"} bgcolor="#ffffff" color="primary.main">
            <Typography color="default">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function MaterialUIBase(){
       const [value,setValue] = useState(0)

       const tabChange = (event,newValue) =>{
            console.log(newValue);
            setValue(newValue);
        }

        return (
            <AppBar position="static" aria-label="simple tabs example">
                <Tabs value={value} onChange={tabChange}> 
                    <Tab label="MyButton"  > </Tab> 
                    <Tab label="MyText" > </Tab> 
                </Tabs>
                <TabPanel value={value} index={0}>
                    <MyButton />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Need to Implement
                </TabPanel>
            </AppBar>
        );
}
export default MaterialUIBase;