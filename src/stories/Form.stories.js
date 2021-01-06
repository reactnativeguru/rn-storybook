import React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {Form, FieldWrapper, TextInput} from '../components/Form';
import {BufferView} from './decorators';

// use the storiesOf function to create the actual story

const defaultTextInputProps = {
  label: 'Demo',
  onChangeText: action('onChangeText'),
};

storiesOf('Form/TextInput', module)
  .addDecorator(BufferView)
  .add('default', () => <TextInput {...defaultTextInputProps} />)
  .add('with placeholder', () => (
    <TextInput placeholder="Demo placeholder" {...defaultTextInputProps} />
  ))
  .add('with value', () => (
    <TextInput value="Demo value" {...defaultTextInputProps} />
  ))
  .add('with error message', () => (
    <TextInput
      message="Message placeholder"
      {...defaultTextInputProps}
      messageType="error"
    />
  ))
  .add('with email', () => (
    <TextInput
      label="email"
      value="john@reactnative.guru"
      placeholder="Demo placeholder"
      {...defaultTextInputProps}
      keyboardType="email-address"
    />
  ))
  .add('with password', () => (
    <TextInput
      label="password"
      value="password"
      placeholder="Demo placeholder"
      {...defaultTextInputProps}
    />
  ));

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
