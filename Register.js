// import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View >
      <Text>Register</Text>
      {/* <StatusBar style="auto" /> */}
      <Formik
        initialValues={{ email: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange('Name')}
              onBlur={handleBlur('Name')}
              placeholder="Name"
              value={values.name}
            />
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="Email"
              value={values.email}
            />
            <TextInput
              onChangeText={handleChange('Phone')}
              onBlur={handleBlur('Phone')}
              placeholder="Phone"
              value={values.phone}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}
