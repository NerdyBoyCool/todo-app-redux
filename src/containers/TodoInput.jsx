import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, FormField, Button} from 'grommet';
import { Field, reduxForm } from 'redux-form';

import {createTodo} from '../actions'

class TodoInput extends Component {
  // MEMO: ラムダ関数で書くことでthisのcontextが保たれる。
  // this.handleSubmit = this.handleSubmit.bind(this)
  // とか書かなくて済む
  handleSubmit = e => {
    e.preventDefault()
    this.props.createTodo(e.value.name)
  }

  renderField = field => {
    const {input, label, type, meta: { touched, error }} = field
    return (
      <div>
        <FormField {...input} label="TODO" type={type} placeholder={label} error={touched && error} />
      </div>
    )
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Field label="name" name="name" text="text" component={this.renderField}/>
        <Button type="submit" primary label="登録" disabled={false}/>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createTodo: text => {
    dispatch(createTodo(text))
  }
})

const validate = values => {
  const errors = {}
  if (!values.name) errors.name = '名前を入力してください'
  return errors
}

export default connect(
  null,
  mapDispatchToProps,
)(reduxForm(
  {
    validate,
    form: 'TodoInput',
    initialValues: { name: '' },
    onSubmitSuccess: () => {
      alert('成功')
    }
  }
  )(TodoInput));

