import React, { Component } from 'react';

const COPYRIGHT_LABEL = 'Copyright & Terms of Use';

const setFirstChildText = (el, text) => {
  if (el && el.firstElementChild) {
    el.firstElementChild.textContent = text;
  }
};

const setNestedChildText = (el, text) => {
  if (el && el.firstElementChild && el.firstElementChild.firstElementChild) {
    el.firstElementChild.firstElementChild.textContent = text;
  }
};

class copyrightLabel extends Component {
  render() {
    return (
      <></>
    );
  }

  componentDidUpdate() {
    const labels = window.document.querySelectorAll(
      '.MuiTypography-root.MuiTypography-subtitle2',
    );
    labels.forEach((el) => {
      const text = el.textContent;
      if (text === 'License') {
        setFirstChildText(el.nextElementSibling, COPYRIGHT_LABEL);
      } else if (text === 'Attribution' || text === 'Provided by') {
        setNestedChildText(el.nextElementSibling, COPYRIGHT_LABEL);
      }
    });
  }
}

export default {
  target: 'AttributionPanel',
  mode: 'add',
  component: copyrightLabel,
};
