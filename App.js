import React, { useEffect } from 'react';
import { View, TextInput, Image, StyleSheet, Platform, KeyboardAvoidingView, StatusBar, SafeAreaView, Text, TouchableOpacity, Dimensions, Keyboard } from 'react-native';
import { useWindowDimensions } from 'react-native';

const LoginScreen = () => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  const buttonWidth = isPortrait ? width * 0.8 : width * 0.4;
  const imageWidth = isPortrait ? width * 0.6 : width * 0.3;
  const imageHeight = imageWidth * 0.5;

  useEffect(() => {
    const updateLayout = () => {
      Keyboard.dismiss();
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <StatusBar
          barStyle={isPortrait ? 'dark-content' : 'light-content'}
          backgroundColor={Platform.OS === 'android' ? '#C96868' : 'transparent'}
        />

        <Image
          source={require('./assets/logo_Lab1-removebg-preview.png')}
          style={{ 
            width: imageWidth, 
            height: imageHeight, 
            marginBottom: 20, 
            marginTop: isPortrait ? 40 : 0
          }}
          resizeMode="contain"
        />

        <TextInput
          style={Platform.select({
            ios: [styles.input, { padding: 12, borderRadius: 12 }],
            android: [styles.input, { padding: 10, borderRadius: 10 }]
          })}
          placeholder="Nhập tên đăng nhập"
          placeholderTextColor="#7EACB5"
        />

        <TextInput
          style={Platform.select({
            ios: [styles.input, { padding: 12, borderRadius: 12 }],
            android: [styles.input, { padding: 10, borderRadius: 10 }]
          })}
          placeholder="Nhập mật khẩu"
          secureTextEntry
          placeholderTextColor="#7EACB5"
        />

        <View style={[styles.buttonContainer, { flexDirection: isPortrait ? 'column' : 'row' }]}>
          <TouchableOpacity
            style={[styles.button, {
              backgroundColor: Platform.select({ ios: '#C96868', android: '#FF6A6A' }),
              width: isPortrait ? buttonWidth * 0.9: buttonWidth * 0.8,
              marginRight: isPortrait ? 0 : 10
            }]}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {
              backgroundColor: Platform.select({ ios: '#7EACB5', android: '#3399FF' }),
              width: isPortrait ? buttonWidth * 0.9  : buttonWidth * 0.8,
              marginLeft: isPortrait ? 0 : 0
            }]}
            onPress={() => {}}
          >
            <Text style={styles.buttonText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF4EA',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FADFA1',
    backgroundColor: '#FFF4EA',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  button: {
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default LoginScreen;
