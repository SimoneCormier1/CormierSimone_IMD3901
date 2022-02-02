AFRAME.registerComponent('delete-mountains', {
    schema: {
      duration: {type: 'number', default:20000.0},
    },
    init: function() {
      
      const CONTEXT_AF        = this; 
      CONTEXT_AF.mountain       = document.querySelector('#mountain-group');
      CONTEXT_AF.isSpinning   = false;
      
      //turning visibility of mountains off when you press the button
      CONTEXT_AF.el.addEventListener('click', function() {
        if (CONTEXT_AF.isButtonPressed === true) {
            CONTEXT_AF.mountain.setAttribute("visible",false); 
            CONTEXT_AF.isButtonPressed = false;

        }
        else {
            CONTEXT_AF.mountain.setAttribute("visible",false); 
            CONTEXT_AF.isButtonPressed = true;
        }
      });
    },
  });