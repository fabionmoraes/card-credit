import React, {useState} from 'react';

import {View, TextInput, StyleSheet} from 'react-native';

import CardCredit from '../../components/CardCredit';
import {maskCard, expiryCard} from '../../utils/mask';

const Home: React.FC = () => {
  const [focused, setFocused] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  let clickable = false;

  const handleMaskCredit = (value: string) => {
    setFocused(false);
    const mask = maskCard(value);
    setNumber(mask);
  };

  const handleMaskExpiry = (value: string) => {
    setFocused(false);
    const mask = expiryCard(value);
    setExpiry(mask);
  };

  if (name && number && expiry && cvc) {
    clickable = true;
  }

  return (
    <View style={styles.container}>
      <View style={styles.ContainerCard}>
        <CardCredit
          flip={focused}
          name={name}
          number={number.replace(/[^\d]+/g, '')}
          expiry={expiry.replace(/[^\d]+/g, '')}
          cvc={cvc}
          clickable={clickable}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Número do Cartão"
          keyboardType="numeric"
          onChangeText={text => handleMaskCredit(text)}
          maxLength={19}
          value={number}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Titular do Cartão"
          onChangeText={text => {
            setFocused(false);
            setName(text);
          }}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Mês/Ano"
          keyboardType="numeric"
          onChangeText={text => {
            setFocused(false);
            handleMaskExpiry(text);
          }}
          maxLength={5}
          value={expiry}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="CVC"
          keyboardType="numeric"
          onChangeText={text => {
            setFocused(true);
            setCvc(text);
          }}
          maxLength={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    flex: 1,
    backgroundColor: '#dbdbdb',
  },
  ContainerCard: {height: 200, paddingHorizontal: 14},
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    borderRadius: 8,
    marginTop: 8,
  },
});

export default Home;
