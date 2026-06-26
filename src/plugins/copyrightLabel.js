import { useEffect } from 'react';
import $ from 'jquery';

function copyrightLabel() {
  useEffect(() => {
    $('.MuiTypography-root.MuiTypography-subtitle2').each(function () {
      const $el = $(this);

      if ($el.html() === 'License') {
        $el.next().children().text('Copyright & Terms of Use');
      }
      if ($el.html() === 'Attribution' || $el.html() === 'Provided by') {
        $el.next().children().children().text('Copyright & Terms of Use');
      }
    });
  });

  return null;
}

export default {
  name: 'CopyrightLabelPlugin',
  target: 'AttributionPanel',
  mode: 'add',
  component: copyrightLabel,
};
