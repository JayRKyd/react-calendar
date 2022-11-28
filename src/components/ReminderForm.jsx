import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

const propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}

const defaultProps = {
  text: '',
  category: 'home',
}

class CalendarReminderForm extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      text: this.props.text,
      category: this.props.category,
    }

    this.toggleIsActive = this.toggleIsActive.bind(this)
  }

  toggleIsActive () {
    this.setState({ active: !this.state.active })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { category } = this.state;

    const updatedReminder = {
      category,
      updateTime: moment(),
      newReminder: false,
      open: false
    }

    this.setState({ editing: false })
    this.props.onSave(updatedReminder)
  }


  

  render () {

    if (this.props.editing === false) {
      return null;
    }

    return (
      <form className="reminder" onSubmit={this.handleSubmit}>
        <input
          type="type"
          maxLength="30"
          placeholder={this.props.placeholder || 'New reminder...'}
          autoFocus="true"
          value={this.props.text}
          onChange={this.props.onChange}
        />

        <button type="button" className="btn" onClick={this.props.onDelete}>Delete</button>
        <button type="submit" className="btn">Save</button>
      </form>
    )
  }
}

CalendarReminderForm.propTypes = propTypes
CalendarReminderForm.defaultProps = defaultProps

export default CalendarReminderForm
