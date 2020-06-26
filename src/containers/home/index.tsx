import React, { Component, useState } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import Divider from '../../components/Divider/index'
import Grid from '../../components/Grid/index'

class Swiper extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <Carousel
        autoplay={true}
        infinite>
        {this.state.data.map((val, index) => (
            <img
              src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
              key={index}
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
        ))}
      </Carousel>
    )
  }
}
function App() {
  return (
    <>
      <Swiper />
      <Divider tip={'猜你喜欢'} />
      <Grid/>
    </>
  )
}
export default App