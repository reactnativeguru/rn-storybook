import React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {Form, FieldWrapper} from '../components/Form';
import {BufferView} from './decorators';

// use the storiesOf function to create the actual story

storiesOf('Form/FieldWrapper', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <FieldWrapper label="Email">
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}}>
        <Text>Hello wrpapper</Text>
      </View>
    </FieldWrapper>
  ))
  .add('error message', () => (
    <FieldWrapper
      label="Email"
      message="Please enter your email"
      messageType="error">
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}}>
        <Text>Wrapper Text</Text>
      </View>
    </FieldWrapper>
  ))
  .add('success message', () => (
    <FieldWrapper label="Email" message="Looks good" messageType="error">
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}}>
        <Text>Success</Text>
      </View>
    </FieldWrapper>
  ))
  .add('multiple fields', () => (
    <React.Fragment>
      <FieldWrapper label="Email">
        <View style={{flex: 1, backgroundColor: '#e6e6e6'}}>
          <Text>Hello wrpapper</Text>
        </View>
      </FieldWrapper>
      <FieldWrapper
        label="Email"
        message="Please enter your email"
        messageType="error">
        <View style={{flex: 1, backgroundColor: '#e6e6e6'}}>
          <Text>Wrapper Text</Text>
        </View>
      </FieldWrapper>
      <FieldWrapper label="Email" message="Looks good" messageType="error">
        <View style={{flex: 1, backgroundColor: '#e6e6e6'}}>
          <Text>Success</Text>
        </View>
      </FieldWrapper>
    </React.Fragment>
  ));

storiesOf('Form', module)
  .addDecorator(BufferView)
  .add('default', () => (
    <Form>
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}}></View>
    </Form>
  ))
  .add('with header', () => (
    <Form header="Hello">
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}}></View>
    </Form>
  ))
  .add('with header and subheader', () => (
    <Form header="Hello" subheader="Welcome back">
      <View style={{flex: 1, backgroundColor: '#e6e6e6'}}></View>
    </Form>
  ));
