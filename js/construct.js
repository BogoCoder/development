function Pro(){
    this.membresia= "";
}
Pro.prototype = new Usuario();

Usuario1 = new Pro;

function Usuario(){
    this.nombre= "";
    this.correo= "";
}
Pro.prototype = new Usuario();

Usuario1.nombre
Usuario1.nombre = "Norberto";
Usuario1.correo = "norbi@gmail.com"
Usuario1.membresia = 13000;

//Adicion de propiedades

Usuario1.username = "NorbiMagico";
Usuario1.username;

usuario.protoype.username = "null";
Usuario2 = new Pro;
Usuario2.username;

function usuario(nombre, correo){
    this.nombre = nombre || "";
    this.correo = correo || "";
}

function Pro(membresia){
    this.membresia = membresia || "";
}

function Pro(nombre, correo, membresia){
    usuario.call(this, nombre, correo);
    this.membresia = membresia || "";
}

//funcion de herencia

function herencia(p) {
    if(p == null) throw TypeError();
    var t = typeof p;
    if(t !== "object" && t !== "function") throw TypeError();
    function f() {};
    f.prototype = p;
    return new f();
}

Casa = { direccion: "Cll 116 # 34-50", tipo: "Comercial" , color_fachada: "Rojo", clase: "Casa"}
Casa1 = herencia(Casa)
Casa1.tipo = "Vivienda"
Casa1.direccion = "Cll 26 # 4-80"
Empresa = { nombre : "Patuco" , direccion: "Cll 25 # 4-80", gerente: "Lucas Patuco Rey"}

function expandir(obj1, obj2){
    for(i in obj2){
            if(obj1.hasOwnProperty(i)){
                continue;
            }
            else{
                obj1[i] = obj2[i];
            }
    }
}


