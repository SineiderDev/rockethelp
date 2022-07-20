import { useState } from 'react';
import {Alert} from 'react-native';
import {
  VStack,
  Heading,
  Icon,
  useTheme
} from 'native-base';
import auth from '@react-native-firebase/auth';
import Logo from '../assets/logo_primary.svg';
import { Envelope, Key } from 'phosphor-react-native';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SignIn() {

  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSignIn(){
    if(!email || !password){
      return Alert.alert('Entrar','Informe e-mail e senha.');
    }
    setIsLoading(true);
    auth()
    .signInWithEmailAndPassword(email,password)
    .then(response =>{
      console.log(response);
    })
    .catch((error)=>{
      console.log(error);
      setIsLoading(false);
      if (error.code === 'auth/invalid-email'){
        return Alert.alert('Entrar','E-mail inválido.');
      }else if (error.code === 'auth/user-not-found'){
        return Alert.alert('Entrar','E-mail ou senha inválida.');
      }else if (error.code === 'auth/wrong-password'){
        return Alert.alert('Entrar','E-mail ou senha inválida.');
      }else{
        Alert.alert('Entrar','Não foi possível acessar.');
      }
    })

  }

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
        onChangeText={setEmail}
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
        onPress={handleSignIn}
        isLoading={isLoading}
      />
    </VStack>
  )
}