class Usuario{
    private numeroUsuario:string

    setnumerousuario(_numeroUsuario){
        this.numeroUsuario = _numeroUsuario
    }

    getnumerousuario(){
        return this.numeroUsuario
    }
}

class Admin extends Usuario {

    private nomeAdmin:String

    setnomeadmin(_nomeAdmin){
        this.nomeAdmin = _nomeAdmin

    }

    getnomeadmin(){
        return this.nomeAdmin
    }
}

const Admin1 = new Admin()
Admin1.setnumerousuario('1')
Admin1.setnomeadmin('Roberto')

console.log(Admin1.getnumerousuario(), Admin1.getnomeadmin())

