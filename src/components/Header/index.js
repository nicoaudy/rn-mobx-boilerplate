import React from "react";
import PropTypes from "prop-types";

import {
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";

const StyledHeader = ({
  title,
  backBotton,
  backAction,
  rightBotton,
  rightAction,
  rightLabel
}) => {
  return (
    <Header>
      {backBotton ? (
        <Left>
          <Button transparent onPress={backAction}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      ) : (
        <Left />
      )}

      <Body>
        <Title center>{title}</Title>
      </Body>

      {rightBotton ? (
        <Right>
          <Button hasText transparent onPress={rightAction}>
            <Text>{rightLabel}</Text>
          </Button>
        </Right>
      ) : (
        <Right />
      )}
    </Header>
  );
};

StyledHeader.propTypes = {
  title: PropTypes.string.isRequired,
  backBotton: PropTypes.bool,
  backAction: PropTypes.func,
  rightBotton: PropTypes.bool,
  rightAction: PropTypes.func,
  rightLabel: PropTypes.string
};

export default StyledHeader;
