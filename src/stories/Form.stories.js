import React from 'react';
import {View, Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {Form} from '../components/Form';
import {BufferView} from './decorators';

// use the storiesOf function to create the actual story

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
