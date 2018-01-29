import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import '../styles/App.css';

const HeaderApp = () => (
  <Header className="app-font-color" as='h3' block>
  	<Icon name='code' />
    <Header.Content>
      Magrathea Gist
    </Header.Content>
  </Header>
)

export default HeaderApp