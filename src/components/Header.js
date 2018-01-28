import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const HeaderApp = () => (
  <Header as='h3' color='yellow' block>
  	<Icon name='code' />
    <Header.Content>
      Magrathea Gist
    </Header.Content>
  </Header>
)

export default HeaderApp