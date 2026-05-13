import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render } from '@testing-library/react';

import copyrightLabel from '../../src/plugins/copyrightLabel';

const Component = copyrightLabel.component;
const COPYRIGHT_LABEL = 'Copyright & Terms of Use';

const buildLabelPair = (labelText, valueDepth) => {
  const label = document.createElement('h6');
  label.className = 'MuiTypography-root MuiTypography-subtitle2';
  label.textContent = labelText;

  const valueWrapper = document.createElement('div');
  if (valueDepth === 1) {
    const child = document.createElement('span');
    child.textContent = 'original-value';
    valueWrapper.appendChild(child);
  } else {
    const child = document.createElement('div');
    const grandchild = document.createElement('span');
    grandchild.textContent = 'original-value';
    child.appendChild(grandchild);
    valueWrapper.appendChild(child);
  }

  document.body.appendChild(label);
  document.body.appendChild(valueWrapper);
  return { label, valueWrapper };
};

describe('copyrightLabel plugin export shape', () => {
  it('matches the v4 add-mode plugin shape targeting AttributionPanel', () => {
    expect(copyrightLabel).toMatchObject({
      target: 'AttributionPanel',
      mode: 'add',
    });
    expect(copyrightLabel.component).toBeTypeOf('function');
  });
});

describe('copyrightLabel componentDidUpdate DOM rewrites', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  const forceUpdate = (props) => {
    const { rerender } = render(<Component {...props} />);
    rerender(<Component {...props} bump={1} />);
  };

  it('rewrites the value next to a "License" label (depth 1)', () => {
    const { valueWrapper } = buildLabelPair('License', 1);
    forceUpdate({});
    expect(valueWrapper.firstElementChild.textContent).toBe(COPYRIGHT_LABEL);
  });

  it('rewrites the value next to an "Attribution" label (depth 2)', () => {
    const { valueWrapper } = buildLabelPair('Attribution', 2);
    forceUpdate({});
    expect(valueWrapper.firstElementChild.firstElementChild.textContent).toBe(
      COPYRIGHT_LABEL,
    );
  });

  it('rewrites the value next to a "Provided by" label (depth 2)', () => {
    const { valueWrapper } = buildLabelPair('Provided by', 2);
    forceUpdate({});
    expect(valueWrapper.firstElementChild.firstElementChild.textContent).toBe(
      COPYRIGHT_LABEL,
    );
  });

  it('leaves unrelated labels alone', () => {
    const { valueWrapper } = buildLabelPair('Manifest', 1);
    forceUpdate({});
    expect(valueWrapper.firstElementChild.textContent).toBe('original-value');
  });

  it('handles multiple labels in the same panel independently', () => {
    const license = buildLabelPair('License', 1);
    const attribution = buildLabelPair('Attribution', 2);
    const ignored = buildLabelPair('Manifest', 1);

    forceUpdate({});

    expect(license.valueWrapper.firstElementChild.textContent).toBe(
      COPYRIGHT_LABEL,
    );
    expect(
      attribution.valueWrapper.firstElementChild.firstElementChild.textContent,
    ).toBe(COPYRIGHT_LABEL);
    expect(ignored.valueWrapper.firstElementChild.textContent).toBe(
      'original-value',
    );
  });

  it('renders an empty fragment (adds no DOM of its own)', () => {
    const { container } = render(<Component />);
    expect(container.firstChild).toBeNull();
  });
});
