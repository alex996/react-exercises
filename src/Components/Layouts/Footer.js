import React from 'react'
import { withWidth, Paper, Tabs, Tab } from '@material-ui/core'

export default withWidth()(
  ({ muscles, category, onSelect, width }) => {
    const index = category
      ? muscles.findIndex(group => group === category) + 1
      : 0

    const onIndexSelect = (e, index) =>
      onSelect(index === 0 ? '' : muscles[index - 1])

    return <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor='primary'
        textColor='primary'
        centered={width !== 'xs'}
        scrollable={width === 'xs'}
      >
        <Tab label='All' />
        {muscles.map(group =>
          <Tab key={group} label={group} />
        )}
      </Tabs>
    </Paper>
  }
)