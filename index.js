new Vue({
    el: "#vue-app",
    data: {
        // force : document.getElementById("parameter1")[0].value,
        // area : document.getElementById("parameter2")[0].value,
        // pressure: parseFloat(parameter1) / parseFloat(parameter2),
        // unknown1: parseFloat(parameter1) + parseFloat(parameter2),
        // unknown2: parseFloat(parameter1) - parseFloat(parameter2),
        // unknown3: parseFloat(parameter1) * parseFloat(parameter2),
//this isnt raw js, you dont need all these above in vue.js, that is the whole essence of vue,
//youll learn more on how vue talks to DOM element using refs, just have it in mind that vue is more about 
//data orientation
        

        force:0,
        area:0,
        pressure:0
   
    },
    methods: {
        //you can declare a function like this
        divide:function(){           
            this.pressure = this.force/this.area
            // alert(this.pressure);
        },
        //or like this, like this is neater
        add() {
            this.pressure = this.force + this.area;     
        },
        subtract() {
            this.pressure = this.force - this.area;               
        },
        
        multiply() {
            this.pressure = this.force * this.area;                          
        },
    
        reset() {
            this.pressure=0;
            this.force=0;
            this.area=0;          
        }
    }
    });
