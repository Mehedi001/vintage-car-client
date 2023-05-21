import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Category = () => {

    const [carData, setCarData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8800/toy/Regular')
        .then (res => res.json())
        .then(data => setCarData (data.slice(0, 3)))
    },[])

    console.log(carData)

    return (
        <div className="my-6 lg:my-12">
            <hr />
            <h1 className='text-5xl font-semibold text-center my-12'>Short By Category</h1>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Regular</Tab>
                        <Tab>Sports</Tab>
                        <Tab>Vintage</Tab>
                        <Tab>Military</Tab>
                        <Tab>Bus</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 5</h2>
                    </TabPanel>
                </Tabs>
            </div>
            <hr />
        </div>
    );
};

export default Category;