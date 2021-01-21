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
        u:0,
        td: 0,
        reD: 0,
        time: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        pressurechange: ["120", "225", "196", "170", "146", "123", "105", "84", "64", "64"],
        WD: ["4.88", " 7.46", "9.10", " 10.09", "10.83", "11.27", " 11.52", "11.69", " 11.81", " 11.89"],
        F: ["12.124", "30.761", "52.826", "79.798", "105.964", "132.292", "157.080", "179.177", "196.654", "210.743"],
        Eo: ["0.268","0.0574","0.923","0.1411","0.1881","0.2380","0.2862","0.3299","0.3630","0.3895"],
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
            this.result = 1.119 * this.porosity * this.f * this.h * this.cbar * this.ro2;
        },
        teedee: function () { //teedee is the dimensionless time with t unknown//
            this.cbar = this.cw + this.cf;
            this.result = (2.309 * this.k) / (this.porosity * this.viscosity * this.cbar * this.ro2);
        },
        reset: function () {
            this.result = 0;
        },

        //DIMESNSIONLESS TIME CALCULATIONS//
        tD0: function () {
            this.cbar = this.cw + this.cf;
            this.td = (2.309 * this.k) / (this.porosity * this.viscosity * this.cbar * this.ro2);
            this.result = this.time[0] * this.td
        },
        tD1: function () {
            this.cbar = this.cw + this.cf;
            this.td = (2.309 * this.k) / (this.porosity * this.viscosity * this.cbar * this.ro2);
            this.result = this.time[1] * this.td
        },
        tD2: function () {
            this.cbar = this.cw + this.cf;
            this.td = (2.309 * this.k) / (this.porosity * this.viscosity * this.cbar * this.ro2);
            this.result = this.time[2] * this.td
        },
        tD3: function () {
            this.cbar = this.cw + this.cf;
            this.td = (2.309 * this.k) / (this.porosity * this.viscosity * this.cbar * this.ro2);
            this.result = this.time[3] * this.td
        },
        tD4: function () {
            this.cbar = this.cw + this.cf;
            this.td = (2.309 * this.k) / (this.porosity * this.viscosity * this.cbar * this.ro2);
            this.result = this.time[4] * this.td
        },
        tD5: function () {
            this.cbar = this.cw + this.cf;
            this.td = (2.309 * this.k) / (this.porosity * this.viscosity * this.cbar * this.ro2);
            this.result = this.time[5] * this.td
        },
        tD6: function () {
            this.cbar = this.cw + this.cf;
            this.td = (2.309 * this.k) / (this.porosity * this.viscosity * this.cbar * this.ro2);
            this.result = this.time[6] * this.td
        },
        tD7: function () {
            this.cbar = this.cw + this.cf;
            this.td = (2.309 * this.k) / (this.porosity * this.viscosity * this.cbar * this.ro2);
            this.result = this.time[7] * this.td
        },
        tD8: function () {
            this.cbar = this.cw + this.cf;
            this.td = (2.309 * this.k) / (this.porosity * this.viscosity * this.cbar * this.ro2);
            this.result = this.time[8] * this.td
        },
        tD9: function () {
            this.cbar = this.cw + this.cf;
            this.td = (2.309 * this.k) / (this.porosity * this.viscosity * this.cbar * this.ro2);
            this.result = this.time[9] * this.td
        },
        tD10: function () {
            this.cbar = this.cw + this.cf;
            this.td = (2.309 * this.k) / (this.porosity * this.viscosity * this.cbar * this.ro2);
            this.result = this.time[10] * this.td
        },
        //WATER INFLUX CALCULATIONS//
        we1: function () {
            this.cbar = this.cw + this.cf;
            this.f = this.theta / 360;
            this.u = 1.119 * this.porosity * this.f * this.h * this.cbar * this.ro2;
            this.result = this.u * this.pressurechange[0] * this.WD[0];
        },
        we2: function () {
            this.cbar = this.cw + this.cf;
            this.f = this.theta / 360;
            this.u = 1.119 * this.porosity * this.f * this.h * this.cbar * this.ro2;
            this.result = this.u * ((this.pressurechange[0] * this.WD[1]) + (this.pressurechange[1] * this.WD[0]));
        },
        we3: function () {
            this.cbar = this.cw + this.cf;
            this.f = this.theta / 360;
            this.u = 1.119 * this.porosity * this.f * this.h * this.cbar * this.ro2;
            this.result = this.u * ((this.pressurechange[0] * this.WD[2]) + (this.pressurechange[1] * this.WD[1]) + (this.pressurechange[2] * this.WD[0]));
        },
        we4: function () {
            this.cbar = this.cw + this.cf;
            this.f = this.theta / 360;
            this.u = 1.119 * this.porosity * this.f * this.h * this.cbar * this.ro2;
            this.result = this.u * ((this.pressurechange[0] * this.WD[3]) + (this.pressurechange[1] * this.WD[2]) + (this.pressurechange[2] * this.WD[1]) + (this.pressurechange[3] * this.WD[0]));
        },
        we5: function () {
            this.cbar = this.cw + this.cf;
            this.f = this.theta / 360;
            this.u = 1.119 * this.porosity * this.f * this.h * this.cbar * this.ro2;
            this.result = this.u * ((this.pressurechange[0] * this.WD[4]) + (this.pressurechange[1] * this.WD[3]) + (this.pressurechange[2] * this.WD[2]) + (this.pressurechange[3] * this.WD[1]) + (this.pressurechange[4] * this.WD[0]));
        },
        we6: function () {
            this.cbar = this.cw + this.cf;
            this.f = this.theta / 360;
            this.u = 1.119 * this.porosity * this.f * this.h * this.cbar * this.ro2;
            this.result = this.u * ((this.pressurechange[0] * this.WD[5]) + (this.pressurechange[1] * this.WD[4]) + (this.pressurechange[2] * this.WD[3]) + (this.pressurechange[3] * this.WD[2]) + (this.pressurechange[4] * this.WD[1]) + (this.pressurechange[5] * this.WD[0]));
        },
        we7: function () {
            this.cbar = this.cw + this.cf;
            this.f = this.theta / 360;
            this.u = 1.119 * this.porosity * this.f * this.h * this.cbar * this.ro2;
            this.result = this.u * ((this.pressurechange[0] * this.WD[6]) + (this.pressurechange[1] * this.WD[5]) + (this.pressurechange[2] * this.WD[4]) + (this.pressurechange[3] * this.WD[3]) + (this.pressurechange[4] * this.WD[2]) + (this.pressurechange[5] * this.WD[1]) + (this.pressurechange[6] * this.WD[0]));
        },
        we8: function () {
            this.cbar = this.cw + this.cf;
            this.f = this.theta / 360;
            this.u = 1.119 * this.porosity * this.f * this.h * this.cbar * this.ro2;
            this.result = this.u * ((this.pressurechange[0] * this.WD[7]) + (this.pressurechange[1] * this.WD[6]) + (this.pressurechange[2] * this.WD[5]) + (this.pressurechange[3] * this.WD[4]) + (this.pressurechange[4] * this.WD[3]) + (this.pressurechange[5] * this.WD[2]) + (this.pressurechange[6] * this.WD[1]) + (this.pressurechange[7] * this.WD[0]));
        },
        we9: function () {
            this.cbar = this.cw + this.cf;
            this.f = this.theta / 360;
            this.u = 1.119 * this.porosity * this.f * this.h * this.cbar * this.ro2;
            this.result = this.u * ((this.pressurechange[0] * this.WD[8]) + (this.pressurechange[1] * this.WD[7]) + (this.pressurechange[2] * this.WD[6]) + (this.pressurechange[3] * this.WD[5]) + (this.pressurechange[4] * this.WD[4]) + (this.pressurechange[5] * this.WD[3]) + (this.pressurechange[6] * this.WD[2]) + (this.pressurechange[7] * this.WD[1]) + (this.pressurechange[8] * this.WD[0]));
        },
        we10: function () {
            this.cbar = this.cw + this.cf;
            this.f = this.theta / 360;
            this.u = 1.119 * this.porosity * this.f * this.h * this.cbar * this.ro2;
            this.result = this.u * ((this.pressurechange[0] * this.WD[9]) + (this.pressurechange[1] * this.WD[8]) + (this.pressurechange[2] * this.WD[7]) + (this.pressurechange[3] * this.WD[6]) + (this.pressurechange[4] * this.WD[5]) + (this.pressurechange[5] * this.WD[4]) + (this.pressurechange[6] * this.WD[3]) + (this.pressurechange[7] * this.WD[2]) + (this.pressurechange[8] * this.WD[1]) + (this.pressurechange[9] * this.WD[0]));
        },
        wecum: function () {
            this.result = this.we1() + this.we2() + this.we3() + this.we4() + this.we5() + this.we6() + this.we7() + this.we8() + this.we8() + this.we9() + this.we10();
        
        },
        //We/Eo//
        we1e0: function() {
        this.result = this.we1() / this.E0[0];
        },

        we2e0: function() {
        this.result = this.we2() / this.E0[1];
        },

        we3e0: function() {
        this.result = this.we3() / this.E0[2];
        },
        we4e0: function() {
        this.result = this.we4() / this.E0[3];
        },
        we5e0: function() {
        this.result = this.we5() / this.E0[4];
        },
        we6e0: function() {
        this.result = this.we6() / this.E0[5];
        },
        we7e0: function() {
        this.result = this.we7() / this.E0[6];
        },
        we8e0: function() {
        this.result = this.we8() / this.E0[7];
        },
        we9e0: function() {
            this.result = this.we9() / this.E0[8];
        },
        we10e0: function() {
        this.result = this.we10() / this.E0[9];
        },
        //F/Eo//
        f1eo: function () {
            this.result = this.F[0] / this.E[0];
        },
        f2eo: function () {
            this.result = this.F[1] / this.E[1];
        },
        f3eo: function () {
            this.result = this.F[2] / this.E[2];
        },
        f4eo: function () {
            this.result = this.F[3] / this.E[3];
        },
        f5eo: function () {
            this.result = this.F[4] / this.E[4];
        },
        f6eo: function () {
            this.result = this.F[5] / this.E[5];
        },
        f7eo: function () {
            this.result = this.F[6] / this.E[6];
        },
        f8eo: function () {
            this.result = this.F[7] / this.E[7];
        },
        f9eo: function () {
            this.result = this.F[8] / this.E[8];
        },
        f10eo: function () {
            this.result = this.F[9] / this.E[9];
        }
       
    }
})
 