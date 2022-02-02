AFRAME.registerComponent( 'delete-lantern', {

    init : function(){

        const lanternElem = this;

        
        lanternElem.el.addEventListener('click', function(event){
            lanternElem.deleteLantern();
        });

    },
    
    //deletes created lantern
    deleteLantern : function(){
        const lanternElem = this;
        lanternElem.el.parentNode.removeChild( lanternElem.el );
        
    
    },

});