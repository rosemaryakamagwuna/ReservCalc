new Vue({
    el: "#vue-app",
    data: {
       
        result: 0,
        theta: 140,
        ro2: 84640000,
        h: 100,
        k: 200,
        porosity: 0.25,
        cw: 0.000003,
        cf: 0.000004,
        swc: 0.05,
        deltaP10: 1300,
        viscosity: 0.55,
        t0: 0,
        linkedin: "//www.linkedin.com/in/rosemary-akamagwuna/"
        
     
    },

    methods: {
        constantf: function () {
            this.result = this.theta / 360;
        },
        compressibility: function () {
            this.result = this.cw + this.cf;
        },
        acquiferconstant: function () {
            this.result = 1.119 * this.porosity * 0.38889 * this.h * 0.000007 * this.ro2;
        },
        teedee: function () {
            
            this.result = (2.309 * this.k) / (this.porosity * this.viscosity * 0.000007 * this.ro2);
        },
        reset: function () {
            this.result = 0;
        },
          
    }

    
})
