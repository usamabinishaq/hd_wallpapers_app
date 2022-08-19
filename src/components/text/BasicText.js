import React from 'react';
import variables from '../../util/utils';

import Text from './Text';

export const textSize = {
  MEDIUM: variables.fontSizePMedium,
  SMALL: variables.fontSizePSmall,
  EX_SMALL: variables.fontSizeSubtext,
};

function BasicText({children, size = textSize.MEDIUM, ...props}) {
  return (
    <Text fontSize={size} color={variables.colorBlack} {...props}>
      {children}
    </Text>
  );
}

export default BasicText;
