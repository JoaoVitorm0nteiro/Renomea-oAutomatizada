const fs = require ('fs');

const basepath = 'diretorioteste/'
const prefix = 'ytdown-'

fs.readdir(basepath, (error, files) => {
    files.map(file => {
        if(file.startsWith(prefix)){
            fs.rename(basepath + file, basepath + file.slice(prefix.length), (err)=>{
                if(err){
                    console.log('FALHA', err.message);
                }else{
                    console.log('Sucesso');
                }
            })
        }
    })
})
