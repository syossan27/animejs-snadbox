$('button#on').click(function(){
  anime({
    targets: ['.switch'],
    translateX: '13rem',
    'background-color': 'green',
    duration: 1000
  });
});

$('button#off').click(function(){
  anime({
    targets: ['.switch'],
    translateX: '0rem',
    'background-color': 'green',
    duration: 1000
  });
});
