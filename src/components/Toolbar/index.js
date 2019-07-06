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

const Toolbar = ({
  title,
  backBotton,
  backAction,
  rightBotton,
  rightAction,
  rightLabel,
  rightWithIcon,
  rightIcon
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
          {rightWithIcon ? (
            <Button transparent onPress={rightAction}>
              <Icon name={rightIcon} />
            </Button>
          ) : (
            <Button hasText transparent onPress={rightAction}>
              <Text>{rightLabel}</Text>
            </Button>
          )}
        </Right>
      ) : (
        <Right />
      )}
    </Header>
  );
};

Toolbar.propTypes = {
  title: PropTypes.string.isRequired,
  backBotton: PropTypes.bool,
  backAction: PropTypes.func,
  rightBotton: PropTypes.bool,
  rightAction: PropTypes.func,
  rightWithIcon: PropTypes.bool,
  rightIcon: PropTypes.string,
  rightLabel: PropTypes.string
};

export default Toolbar;
