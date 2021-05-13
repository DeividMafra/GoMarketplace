import React from 'react';

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity.js',
  () => {
    const { TouchableHighlight } = require('react-native'); // eslint-disable-line

    const MockTouchable = props => {
      return <TouchableHighlight {...props} />;
    };

    MockTouchable.displayName = 'TouchableOpacity';

    return MockTouchable;
  },
);

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');

  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  };
});

// var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

// var _objectWithoutProperties2 = _interopRequireDefault(
//   require('@babel/runtime/helpers/objectWithoutProperties'),
// );

// var _lib = require('./node_modules/@testing-library/react-native/dist/lib');

// var _mockComponent = require('./node_modules/@testing-library/react-native/dist/preset/mock-component.js');

// (0, _lib.getConfig)('coreComponents').forEach(function (component) {
//   try {
//     jest.unmock(component);
//   } catch (e) {}
// });
// jest.unmock('./node_modules/react-native/Libraries/Renderer/shims/ReactNative');
// (0, _lib.getConfig)('coreComponents').forEach(function (component) {
//   try {
//     jest.doMock(component, function () {
//       return (0, _mockComponent.mockComponent)(component);
//     });
//   } catch (e) {}
// });
// jest.doMock(
//   './node_modules/react-native/Libraries/Components/Picker/Picker',
//   function () {
//     // var React = jest.requireActual('react');
//     var Picker = (0, _mockComponent.mockComponent)(
//       './node_modules/react-native/Libraries/Components/Picker/Picker',
//     );

//     Picker.Item = function (_ref) {
//       var children = _ref.children,
//         props = (0, _objectWithoutProperties2.default)(_ref, ['children']);
//       return React.createElement('Picker.Item', props, children);
//     };

//     return Picker;
//   },
// );
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
