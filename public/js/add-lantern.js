AFRAME.registerComponent( 'add-lantern', {
    init : function(){
        console.log('init component' );

        const Context_AF = this;
        
        //add lantern is called when button clicked
        Context_AF.el.addEventListener('click', function(event){
            console.log('click');
            Context_AF.addLantern();
        });


    },
    
    addLantern : function(){
        const Context_AF = this;

        //add lanterns!
        let lanternElem = document.createElement('a-entity');
        lanternElem.setAttribute("id", '#lantern');
        lanternElem.setAttribute('class', 'interactive');
        lanternElem.setAttribute('gltf-model', '#lantern_model');
        lanternElem.setAttribute("visible",true);
        lanternElem.setAttribute('position', { x: -10 +(Math.random() * 20.0), y: 3+ (Math.random() * 20.0), z: -25 + (Math.random() * 20.0) });

        lanternElem.setAttribute('delete-lantern', '');

        let scene = document.querySelector('a-scene');
        scene.appendChild(lanternElem);


    }

});