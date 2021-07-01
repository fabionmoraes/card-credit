import React from 'react';

import {ImageBackground, StyleSheet, Image, Text} from 'react-native';

import FlipCard from 'react-native-flip-card';

import validcredit from 'card-validator';

import {
  Container,
  Number,
  Name,
  MonthYear,
  Expiry,
  Validate,
  Code,
} from './styles';

interface ICardCredit {
  flip: boolean;
  name: string;
  number: string;
  cvc: string;
  expiry: string;
  clickable: boolean;
}

const cardLine = (number: number) => {
  let line: any = '';
  for (var i = 0; i < number; i++) {
    line += '-';
  }

  return line;
};

const CardCredit: React.FC<ICardCredit> = ({
  flip,
  name,
  number,
  cvc,
  expiry,
  clickable,
}) => {
  const numberOne = number.slice(0, 4);
  const numberTwo = number.slice(4, 8);
  const numberTree = number.slice(8, 12);
  const numberFour = number.slice(12, 16);
  const month = expiry.slice(0, 2);
  const year = expiry.slice(2, 4);

  let type: any = <Text />;
  const valid = validcredit.number(number);

  if (valid.card) {
    const cardtype = valid.card.type;

    if (cardtype === 'visa') {
      type = (
        <Image
          source={require('../../assets/cards/visa.jpg')}
          style={styles.flag}
        />
      );
    }

    if (cardtype === 'mastercard') {
      type = (
        <Image
          source={require('../../assets/cards/mastercard.jpg')}
          style={styles.flag}
        />
      );
    }

    if (cardtype === 'elo') {
      type = (
        <Image
          source={require('../../assets/cards/elo.jpg')}
          style={styles.flag}
        />
      );
    }

    if (cardtype === 'american-express') {
      type = (
        <Image
          source={require('../../assets/cards/american.jpg')}
          style={styles.flag}
        />
      );
    }

    if (cardtype === 'hipercard') {
      type = (
        <Image
          source={require('../../assets/cards/hipercard.jpg')}
          style={styles.flag}
        />
      );
    }

    if (cardtype === 'diners-club') {
      type = (
        <Image
          source={require('../../assets/cards/diners.jpg')}
          style={styles.flag}
        />
      );
    }
  }

  return (
    <FlipCard
      clickable={clickable}
      flipHorizontal={true}
      flipVertical={false}
      friction={7}
      flip={flip}>
      <Container>
        <ImageBackground
          source={require('../../assets/card-front.png')}
          style={styles.image}
          imageStyle={styles.borderRadius}>
          {type}
          <Number>
            {numberOne
              ? `${numberOne}${cardLine(4 - numberOne.length)}`
              : cardLine(4)}{' '}
            {numberTwo
              ? `${numberTwo}${cardLine(4 - numberTwo.length)}`
              : cardLine(4)}{' '}
            {numberTree
              ? `${numberTree}${cardLine(4 - numberTree.length)}`
              : cardLine(4)}{' '}
            {numberTree
              ? `${numberFour}${cardLine(4 - numberFour.length)}`
              : cardLine(4)}
          </Number>
          <Name>{name || '-------------'}</Name>
          <MonthYear>MONTH/YEAR</MonthYear>
          <Validate>VALID THRU</Validate>
          <Expiry>
            {month ? `${month}${cardLine(2 - month.length)}` : cardLine(3)}/
            {year ? `${year}${cardLine(2 - year.length)}` : cardLine(3)}
          </Expiry>
        </ImageBackground>
      </Container>
      <Container>
        <ImageBackground
          source={require('../../assets/card-back.png')}
          style={styles.image}
          imageStyle={styles.borderRadius}>
          <Code>{cvc ? `${cvc}${cardLine(3 - cvc.length)}` : cardLine(3)}</Code>
        </ImageBackground>
      </Container>
    </FlipCard>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    elevation: 3,
    marginHorizontal: 18,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#363636',
  },
  borderRadius: {
    borderRadius: 10,
  },
  icon: {
    marginHorizontal: 2,
  },
  flag: {
    position: 'absolute',
    top: 12,
    right: 15,
    width: 54,
    height: 32,
  },
});

export default CardCredit;
