function verificarUsuario(admin){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const usuario="admi";
    if(usuario=== "admin"){
        resolve("Acceso concedido");
    }else{
        reject("Acceso denegado");
    }
},1000);
});
};
verificarUsuario("admin")
.then(res=> console.log(res))//acceso concedido
.catch(err=>console.error(err));
verificarUsuario("Ivan")
.then(res=> console.log(res))
.catch(err=>console.error(err));//acceso denegado