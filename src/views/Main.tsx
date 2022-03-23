import React from 'react';
import {
  Button,
  Center,
  Code,
  Heading,
  HStack,
  Switch,
  Text,
  useColorMode,
  VStack,
} from 'native-base';

import NativeBaseIcon from '@app/components/NativeBaseIcon';
import {useAppDispatch, useAppSelector} from '@app/hooks';
import {increment} from '@app/modules/counter/counter-slice';

// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

const Main = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(increment());
  };

  const counterValue = React.useMemo(() => `Counter is ${count}`, [count]);

  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <NativeBaseIcon />
        <Heading size="lg">Welcome to NativeBoilerplate</Heading>
        <Button size="sm" onPress={handlePress}>
          {counterValue}
        </Button>
        <HStack space={2} alignItems="center">
          <Text>Edit</Text>
          <Code>App.tsx</Code>
          <Text>and save to reload.</Text>
        </HStack>
        <ToggleDarkMode />
      </VStack>
    </Center>
  );
};

export default Main;
