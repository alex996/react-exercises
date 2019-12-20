import React, { Component, Fragment } from 'react'
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import Form from './Form'
import { withContext } from '../../context'

class CreateDialog extends Component {
  state = {
    open: false
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = exercise => {
    this.handleToggle()

    this.props.onCreate(exercise)
  }

  render() {
    const { open } = this.state,
      { muscles } = this.props

    return (
      <Fragment>
        <Fab
          onClick={this.handleToggle}
          color="secondary"
          size="small"
        >
          <Add />
        </Fab>

        <Dialog
          open={open}
          onClose={this.handleToggle}
          fullWidth
          maxWidth="xs"
        >
          <DialogTitle>Create a New Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <Form
              muscles={muscles}
              onSubmit={this.handleFormSubmit}
            />
          </DialogContent>
        </Dialog>
      </Fragment>
    )
  }
}

export default withContext(CreateDialog)
