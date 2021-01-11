import React from 'react';
import faq from './img/faq.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Collapse, Card, Divider} from 'antd';
import { CloseCircleTwoTone } from '@ant-design/icons';


const { Panel } = Collapse;
const hasBorder = true;

function Faq() {
    return(
        <React.Fragment>
            {/* <div className='container faq'>
                <div className='row'>
                    <div className='col-7'> */}
                    <Row className='faq'>
                        <Col span={16}>
                        <h1> Frequently Asked Questions (FAQ): </h1>
                    </Col>
                    {/* <div className='col'> */}
                    <Col span={8}>
                        <img className='img-fluid' id='faqImage' src= {faq} />
                    </Col>
                </Row>
            {/* </div> */}


            <div className='circle'>
                    
            </div>

            

            <div className="line">
                
            </div>

            <div className='container faq1'>
                
                <div className='row'>
                    <div className='col-md-5'>
                            <div class="shadow p-3 mb-2  rounded">
                                <Collapse
                                bordered={false}
                                defaultActiveKey={['1']}
                                expandIcon={({ isActive }) => <CloseCircleTwoTone />}
                                expandIconPosition= "right"
                                className="site-collapse-custom-collapse"
                                >
                                    
                                    <Panel header="How do I start writing on OON?" key="1" className="site-collapse-custom-panel">
                                        <p>First you need to create an account. you
                                            can personalize by uploading a profile
                                            picture and write a bio by clicking on
                                            the top right.
                                        </p>
                                    </Panel>
                                    



                                </Collapse>
                            </div>
                            
                    </div>
                    <div className='col-md-1'>

                    </div>
                    
                    <div className='col-md-5'>
                    <div class="shadow p-3 mb-2 rounded">
                                <Collapse
                                    bordered={false}
                                    defaultActiveKey={['1']}
                                    expandIcon={({ isActive }) => <CloseCircleTwoTone />}
                                    expandIconPosition= "right"
                                    className="site-collapse-custom-collapse"
                                    >
                                        <Panel header="Who can read articles on OON?" key="1" className="site-collapse-custom-panel">
                                            <p>Everyone on the internet can. You just 
                                                need to create and account and read
                                                articles for free.
                                            </p>
                                        </Panel>



                                    </Collapse>
                                </div>
                            
                    </div>

                </div>


                <div className='row mt-4'>
                    <div className='col-md-5'>
                    <div class="shadow p-3 mb-2 rounded">
                                <Collapse
                                bordered={false}
                                defaultActiveKey={['1']}
                                expandIcon={({ isActive }) => <CloseCircleTwoTone />}
                                expandIconPosition= "right"
                                className="site-collapse-custom-collapse"
                                >
                                    <Panel header="Who writed on OON?" key="1" className="site-collapse-custom-panel">
                                        <p>Anyone. Whether you've written before or
                                            not, this platform welcomes everyone.
                                            It's easy to get started. With the option
                                            to earn for your work, you can be directly rewarded for the value you provide
                                            to your readers.
                                        </p>
                                    </Panel>



                                </Collapse>
                            
                        </div>
                    </div>
                    <div className='col-md-1'>

                    </div>
                    <div className='col-md-5'>
                    <div class="shadow p-3 mb-2 rounded">
                                <Collapse
                                    bordered={false}
                                    defaultActiveKey={['1']}
                                    expandIcon={({ isActive }) => <CloseCircleTwoTone />}
                                    expandIconPosition= "right"
                                    className="site-collapse-custom-collapse"
                                    >
                                        <Panel header="How can I view my insights?" key="1" className="site-collapse-custom-panel">
                                            <p>You can view how well your article is
                                                doing, how many followers you have and
                                                how many readers clapped on your articles
                                                in your own profile.
                                            </p>
                                        </Panel>



                                </Collapse>
                            </div>
                        
                            
                    </div>

                </div>


                <div className='row mt-4'>
                    <div className='col-md-5'>
                    <div class="shadow p-3 mb-2 rounded">
                                <Collapse
                                bordered={false}
                                defaultActiveKey={['1']}
                                expandIcon={({ isActive }) => <CloseCircleTwoTone />}
                                expandIconPosition= "right"
                                className="site-collapse-custom-collapse"
                                >
                                    <Panel header="How can I make money on OON?" key="1" className="site-collapse-custom-panel">
                                        <p>It is very simple. Write and share your thoughts,
                                            create an audience by sharing it on social
                                            media.
                                        </p>
                                    </Panel>



                                </Collapse>
                            </div>
                        
                    </div>
                    <div className='col-md-1'>

                    </div>
                    <div className='col-md-5'>
                    <div class="shadow p-3 mb-2 rounded">
                                <Collapse
                                    bordered={false}
                                    defaultActiveKey={['1']}
                                    expandIcon={({ isActive }) => <CloseCircleTwoTone />}
                                    expandIconPosition= "right"
                                    className="site-collapse-custom-collapse"
                                    >
                                        <Panel header="How can I grow my audience?" key="1" className="site-collapse-custom-panel">
                                            <p>We provide social media tools on our
                                                platform through which you can connect
                                                with our 30,000+ readers.
                                            </p>
                                        </Panel>



                                </Collapse>
                            </div>
                        
                    </div>

                </div>



            </div>
           
             

            
        </React.Fragment>
    )
}

export default Faq; 