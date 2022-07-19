import { useState } from 'react';
import {
  VStack,
  Heading,
  Icon,
  useTheme
} from 'native-base';
import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import { Envelope, Key } from 'phosphor-react-native';
import { Button } from '../components/Button';

export function SignIn() {

  const { colors } = useTheme();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  return (
    <VStack
      flex={1}
      alignItems="center"
      bg="gray.600"
      px={8}
      pt={24}
    >
      <Logo />
      <Heading
        color="gray.100"
        fontSize="xl"
        mt={20}
        mb={6}
      >
        Acesse sua conta
      </Heading>
      <Input
        onChangeText={setName}
        placeholder="E-mail"
        mb={4}
        InputLeftElement={
          <Icon
            ml={4}
            as={
              <Envelope
                color={colors.gray[300]}
              />
            }
          />
        }
      />
      <Input
        onChangeText={setPassword}
        placeholder="Senha"
        secureTextEntry
        mb={8}
        InputLeftElement={
          <Icon
            ml={4}
            as={
              <Key
                color={colors.gray[300]}
              />
            }
          />
        }
      />
      <Button
        title="Entrar"
        w="full"
      />
    </VStack>
  )
}