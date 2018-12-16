import React from 'react'
import { Typography } from '@material-ui/core'
import { withContext } from '../../context'
import { Form } from './'

const Preview = ({
  muscles,
  editMode,
  exercise,
  exercise: { id, title, description },
  onEdit
}) => (
  <>
    <Typography
      gutterBottom
      variant='h4'
      color='secondary'
    >
      {title || 'Welcome!'}
    </Typography>
    {editMode ? (
      <Form
        key={id}
        exercise={exercise}
        muscles={muscles}
        onSubmit={onEdit}
      />
    ) : (
      <Typography variant='subtitle1'>
        {description || 'Please select an exercise from the list on the left.'}
      </Typography>
    )}
  </>
)

export default withContext(Preview)
