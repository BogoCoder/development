//Objeto vacio {}
let o = new Object();
//Array vacio []
let a = new Array();
//Fecha actual
let d = new Date();
//Expresion regular
let r = new RegExp();

//Consulta de propiedades
let nombre = cancion.nombre;
let genero = cancion["genero"];
let melodia = cancion.compositor.melodia;

cancion.publicacion =  "20 de julio de 1995";
cancion["duracion"] = "5:40";

//Borrado de propiedades
delete cancion.duracion;

//Probando propiedades (in)
var o =  {x:1};
"x" in o;
"y" in o;
"toString" in o;

//Probando propiedades
o.hasOwnProperty("x");
o.hasOwnProperty("y");
o.propertyIsEnumerable("x");
o.propertyIsEnumerable("y");

//Getters & Setters
var compra = { 
    id: "123455",
    valorUnitario: 10000,
    cantidad: 10,
    valorCompra: function(){
        return this.valorUnitario*this.cantidad;
    }
}

compra.valorCompra();

    //Get
    var compra = { 
        id: "123455",
        valorUnitario: 10000,
        cantidad: 10,
        get valorCompra(){
            return this.valorUnitario*this.cantidad;
        }
    }

    compra.valorCompra

    //Set
    var compra = { 
        id: "123455",
        valorUnitario: 10000,
        cantidad: 10,
        get valorCompra(){
            return this.valorUnitario*this.cantidad;
        },
        set valorCompra(newvalue){
            this.valorUnitario = newvalue/this.cantidad;
        }
    }

    compra.valorCompra

    //Crear nuevos getters

    var compra = {
        id: "12345",
        cantidad: 10,
        valorUnitario: 10000};

        Object.defineProperty(compra, "valorCompra" ,
        {
            get:function(){
                return this.cantidad*this.valorUnitario;
            }
        });
    
    compra.valorCompra;

//EJERCICIO 4

let punto = {
    x: 10,
    y: 10,

    get radius(){
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y, 2));
    },

    get angle(){
        return Math.atan2(this.y,this.x);
    },

    set piquarter(radius){
        this.x = radius*Math.cos(Math.PI/4);
        this.y = radius*Math.sin(Math.PI/4);
    },

    set potocar([radius, angle]){
        this.x = radius * Math.cos(angle);
        this.y = radius*Math.sin(angle);
    }
}

//Congelando atributos y sellando objetos

var obj0 = {x:1};
obj0.x;
obj0.x = 3;
obj0.x;

var obj1 = Object.freeze({x:1});
obj1.x;
obj1.x = 3;
obj1.x;

//Manipulacion de la propiedades
var obj2 = { y:{value:1,writable:true}};
obj2.y.value

var obj12 =  Object.create(
    Object.freeze(
        {x:1}
    ),
    {y: {value:2, writable: true}}
)

var obj = Object.seal(Object.create(
    Object.freeze({x:1}),
    {y: { value: 2, writable: true}}
));

obj.y = 3
obj.y