import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default function SafeView(props, { style }) {
  return <View style={[styles.container, style]}>{props.children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }
})