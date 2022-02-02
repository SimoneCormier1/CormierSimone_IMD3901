AFRAME.registerComponent('add-mountains', {
    schema: {
      duration: {type: 'number', default:20000.0},
    },
    init: function() {
      
      const CONTEXT_AF = this;
      CONTEXT_AF.mountain = document.querySelector('#mountain-group');
      CONTEXT_AF.isButtonPressed = false;
      
      //makes mountaines all visible when you press the button
      CONTEXT_AF.el.addEventListener('click', function() {
        if (CONTEXT_AF.isButtonPressed === true) {
            CONTEXT_AF.mountain.setAttribute("visible",true); //turning visibility on
            CONTEXT_AF.isButtonPressed = false;
        }
        else {
            CONTEXT_AF.mountain.setAttribute("visible",true); //turning visibility on
            CONTEXT_AF.isButtonPressed = true;
        }
      });
    },
  });