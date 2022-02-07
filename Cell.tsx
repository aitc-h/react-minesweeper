import React = require('react');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBomb, faFlag } from '@fortawesome/free-solid-svg-icons';

library.add(faBomb, faFlag);

type TCell = {
  position: { x: number; y: number };
  value: number;
  isOpen: boolean;
  isFlagged: boolean;
  onLeftClick?: any;
};

export const Cell = (props: TCell) => {
  function getText() {
    if (props.isOpen) {
      if (props.value > 0) {
        return <span className={`bomb-${props.value}`}>{props.value}</span>;
      }
      if (props.value == 0) {
        return '';
      }
      return <FontAwesomeIcon icon="fas fa-bomb" />;
      return <i className="fas fa-xs fa-flag" />;
    } else {
      if (props.isFlagged) {
        return <i className="fas fa-flag" />;
      } else {
        return <FontAwesomeIcon icon="fas fa-bomb" />;
      }
    }
  }

  return (
    <button
      className={
        'cell' +
        (props.isOpen ? ' cell-open' : '') +
        (props.isFlagged ? ' cell-flagged' : '')
      }
      onClick={() => props.onLeftClick & props.onLeftClick(props.position)}
    >
      {getText()}
    </button>
  );
};
