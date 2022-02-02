'use strict'

AFRAME.registerComponent('scaling-effect', {
    schema : {
    
        duration: {type:'number', default:20000}
    },
    init : function() {


        const CONTEXT_AF        = this; 
        CONTEXT_AF.candle        = document.querySelector('#candle-group');
        CONTEXT_AF.isScaling   = false;

        CONTEXT_AF.candle.setAttribute('animation', {property:'scale', to:"4 8 4", enabled:false}); 

        CONTEXT_AF.el.addEventListener('click', function() {
            if(CONTEXT_AF.isScaling === true){
                CONTEXT_AF.candle.setAttribute('animation', {enabled:false})
                CONTEXT_AF.isScaling = false;
            }
            else{
                CONTEXT_AF.candle.setAttribute('animation', {enabled:true})
                CONTEXT_AF.isScaling = true
            }
        });
    }
});

