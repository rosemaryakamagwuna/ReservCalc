new Vue({
    el: "#vue-app",
    data: {
        force : document.getElementById("parameter1")[0].value,
        area : document.getElementById("parameter2")[0].value,

        pressure: parseFloat(parameter1) / parseFloat(parameter2),
        unknown1: parseFloat(parameter1) + parseFloat(parameter2),
        unknown2: parseFloat(parameter1) - parseFloat(parameter2),
        unknown3: parseFloat(parameter1) * parseFloat(parameter2)
    
   
    },
    methods: {
        divide: function () {
            document.getElementsById("output")[0].value = pressure;
        },
        add: function () {
            document.getElementsById("output")[0].value = unknown1;
               
        },
        subtract: function () {
            document.getElementsById("output")[0].value = unknown2;
        },
        
        multiply: function () {
            document.getElementsById("output")[0].value = unknown3;
        },
    
        reset: function () {
            ctx.clearRect(0, 0, canvasLength, canvasLength);
            setUp();
        }
    }
    });
