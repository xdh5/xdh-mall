import React, { Component, useState } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import Grid from '../../components/Grid/index'

function App() {
  return (
    <div>
      <WhiteSpace size="xs" />
      <SearchBar placeholder="Search" maxLength={8} />
      <Grid/>
    </div>
  )
}

export default App