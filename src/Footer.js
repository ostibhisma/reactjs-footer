import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import firstImg from './img/1.png';
import secondImg from './img/2.png';
import thirdImg from './img/3.png';
import {Row, Col,Typography, Image } from 'antd';

const {Title, Paragraph} = Typography;

const Footer = () => {
  return (
    <React.Fragment>
      {/* <div className='container m-5 desc'> */}
      <Row className='desc'>
        <Paragraph className="paragraph">
          If you have a story to tell, knowledge to share,
          an opinion to share, or a perspective to offer —
          welcome home. It’s easy and free to post your
          thinking on any topic, whether it’s an essay,
          an article, a blog, or a story. You can use our
          platform to express yourself creatively. Share your
          ideas, build your own audience and earn! You’ll have
          the chance to nurture your passion for writing,opportunity
          to follow your passion for scribing, or even start a movement.

        </Paragraph>
      </Row>

      <div className='grid'>
        {/* <div className="row"> */}
        <Row>
          {/* <div className=" col-4 col-md-4 grid1"> */}
          <Col span={8} className='grid1'>
            <Title level={1}>Share Your ideas</Title>
          </Col>
          {/* <div className=" col-4 col-md-4 ml-4 grid2"> */}
          <Col span={8} className='grid2'>
            <Title level={1}>Build an Audience</Title>
          </Col>
          {/* <div className=" col-4 col-md-4 grid3"> */}
          <Col span={8} className='grid3'>
            <Title level={1}>Earn Money.</Title>
          </Col>
        </Row>
      </div>

      {/* </div> */}

      <div className="foot">
      <Row>
        {/* <div className="row"> */}
          {/* <div className="col-md-6"> */}
          <Col>
            <ul>
              <li>
                <Title level={1}>Share Your Ideas</Title>
                <Paragraph className="paragraph">Write about what matters to you, and give form to anything from a quick thought to a long story.
                  </Paragraph>
              </li>
            </ul>
          </Col>
          {/* <div className="col-md-6"> */}
          <Col>
            <Image src={firstImg} width={200} height={200} />
          </Col>
        </Row>

        {/* <div className="row mt-4"> */}
        <Row>
          {/* <div className="col-md-6"> */}
          <Col>
          <Image src={secondImg} width={200} height={200} />
          </Col>
          {/* <div className="col-md-6"> */}
          <Col>
            <ul>
              <li>
                <h1>Build an Audience</h1>
                <Paragraph className="paragraph">
                  Find and engage with readers who enjoy what you write, interact with them in the comments section.

                    </Paragraph>
              </li>
            </ul>

          </Col>
        </Row>
        {/* </div> */}

        {/* <div className="row mt-4"> */}
        <Row>
          {/* <div className="col-md-6"> */}
          <Col>
            <ul>
              <li>
                <h1> Earn Money</h1>

                <Paragraph className="paragraph">
                  If you choose, you can get paid for your writing when readers read your writings and follow you.

                  </Paragraph>
              </li>
            </ul>
          </Col>
          {/* <div className="col-md-6"> */}
          <Col>
          <Image src={thirdImg} width={200} height={200} />
          </Col>
        </Row>
     </div>

    </React.Fragment>
  )
}

export default Footer
