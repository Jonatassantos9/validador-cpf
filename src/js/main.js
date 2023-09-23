import validatorCpf from './validatorCpf.js'

const app = validatorCpf()

try{
    app.start(); // INICIANDO APP
}catch(e){
    console.log('[error] Uncaught error!')
    console.log(e)
}