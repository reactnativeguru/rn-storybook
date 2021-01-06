import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import {View} from 'react-native';

import FormInput from '../components/TextInput';

storiesOf('FormInput', module).add('default', () => <FormInput></FormInput>);
