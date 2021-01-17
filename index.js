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
        cbar: 0,
        f: 0,
        td: 0,
        reD: 0,
        time: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        pressurechange: ["120", "225", "196", "170", "146", "123", "105", "84", "64", "64"],
        WD: ["4.95"," 8.12","10.90"," 13.50"," 15.90"," 18.10"," 20.20","22.20"," 24.00"," 25.70"],
        linkedin: "//www.linkedin.com/in/rosemary-akamagwuna/"
        
     
    },

    methods: {
        //calculation of prerequisite parameters to determine the cumulative water influx//
        constantf: function () {
            this.result = this.theta / 360;
        },
        compressibility: function () {
            this.result = this.cw + this.cf;
        },
        acquiferconstant: function () {
            this.cbar = this.cw + this.cf;
            this.f = this.theta / 360;
            this.result = 1.119 * this.porosity *this.f*this.h *this.cbar* this.ro2;
        },
        teedee: function () { //teedee is the dimensionless time with t unknown//
            this.cbar = this.cw + this.cf;
            this.result = (2.309 * this.k) / (this.porosity * this.viscosity *this.cbar* this.ro2);
        },
        reset: function () {
            this.result = 0;
        },

        //DIMESNSIONLESS TIME CALCULATIONS//
        tD0: function () {
             this.cbar = this.cw + this.cf;
            this.td= (2.309 * this.k) / (this.porosity * this.viscosity *this.cbar* this.ro2);
           this.result = this.time[0]*this.td
        },  
        tD1: function () {
             this.cbar = this.cw + this.cf;
            this.td= (2.309 * this.k) / (this.porosity * this.viscosity *this.cbar* this.ro2);
           this.result = this.time[1]*this.td
        }, 
        tD2: function () {
             this.cbar = this.cw + this.cf;
            this.td= (2.309 * this.k) / (this.porosity * this.viscosity *this.cbar* this.ro2);
           this.result = this.time[2]*this.td
        }, 
        tD3: function () {
             this.cbar = this.cw + this.cf;
            this.td= (2.309 * this.k) / (this.porosity * this.viscosity *this.cbar* this.ro2);
           this.result = this.time[3]*this.td
        },
        tD4: function () {
             this.cbar = this.cw + this.cf;
            this.td= (2.309 * this.k) / (this.porosity * this.viscosity *this.cbar* this.ro2);
           this.result = this.time[4]*this.td
        }, 
        tD5: function () {
             this.cbar = this.cw + this.cf;
            this.td= (2.309 * this.k) / (this.porosity * this.viscosity *this.cbar* this.ro2);
           this.result = this.time[5]*this.td
        },
        tD6: function () {
             this.cbar = this.cw + this.cf;
            this.td= (2.309 * this.k) / (this.porosity * this.viscosity *this.cbar* this.ro2);
           this.result = this.time[6]*this.td
        },
        tD7: function () {
             this.cbar = this.cw + this.cf;
            this.td= (2.309 * this.k) / (this.porosity * this.viscosity *this.cbar* this.ro2);
           this.result = this.time[7]*this.td
        },
        tD8: function () {
             this.cbar = this.cw + this.cf;
            this.td= (2.309 * this.k) / (this.porosity * this.viscosity *this.cbar* this.ro2);
           this.result = this.time[8]*this.td
        },
        tD9: function () {
             this.cbar = this.cw + this.cf;
            this.td= (2.309 * this.k) / (this.porosity * this.viscosity *this.cbar* this.ro2);
           this.result = this.time[9]*this.td
        }, 
        tD10: function () {
             this.cbar = this.cw + this.cf;
            this.td= (2.309 * this.k) / (this.porosity * this.viscosity *this.cbar* this.ro2);
           this.result = this.time[10]*this.td
        } 
            //WATER INFLUX CALCULATIONS//
        
        },

})
