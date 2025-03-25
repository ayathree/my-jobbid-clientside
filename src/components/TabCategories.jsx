import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabCategories = () => {
    return (
        
            <Tabs>
              <div className='container px-6 py-10 mx-auto'>
                <h1 className='text-2xl font-semibold text-center capitalize font-lato mb-6'>Browse job by category</h1>
                <p className=' text-center capitalize font-lato mb-6'>Here you can find, search your preferable jobs with  <br />better filter and additional information</p>
              <div className='flex justify-center item-center capitalize'>
              <TabList  >
                <Tab>Web development</Tab>
                <Tab>Graphics designing</Tab>
                <Tab>Digital Marketing</Tab>
              </TabList>
          
              </div>
              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              </div>
            </Tabs>
          
    );
};

export default TabCategories;