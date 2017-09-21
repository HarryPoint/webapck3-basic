  function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
      'Hello webpack!',
      '5 cubed is equal tosdfasdfasfdasdfasdfasdf是打发水电费asdsdf '
    ].join('\n\n');

    return element;
  }

  document.body.appendChild(component());