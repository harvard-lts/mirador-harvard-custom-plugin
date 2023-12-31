import React, { Component } from 'react';
import $ from "jquery";

class copyrightLabel extends Component {
  render() {

    return (
      <></>
    );
  }

  componentDidUpdate() {
    $(".MuiTypography-root.MuiTypography-subtitle2").each(function(){
      const $el = $(this);

      if ($el.html() === "License"){
        $el.next().children().text("Copyright & Terms of Use");
      }
      if ($el.html() === "Attribution" || $el.html() === "Provided by"){
        $el.next().children().children().text("Copyright & Terms of Use");
      }
    });
  }
}

export default {
  target: 'AttributionPanel',
  mode: 'add',
  component: copyrightLabel,
}