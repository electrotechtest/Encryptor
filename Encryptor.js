const NumberOfCaractere=65535;//default it's for UTF-16 but you can change the encrypting code (UTF-8,ASCII,...)
module.exports.EncryptorNV=function(text){//encrypt data with create new key and step 
    let tempCaractere;
    let returnedData={
        textData:"",
        key:parseInt(Math.random()*NumberOfCaractere),
        step:parseInt((Math.random()*(NumberOfCaractere*2))-NumberOfCaractere)
    };
    let tempKey=returnedData.key;
    for(let i=0;i<text.length;i++){
        tempCaractere=text.charCodeAt(i)+tempKey;
        while(tempCaractere<0 || tempCaractere>NumberOfCaractere){
            while(tempCaractere<0){
                tempCaractere=NumberOfCaractere-tempCaractere;
            }
            while(tempCaractere>NumberOfCaractere){
                tempCaractere=tempCaractere-NumberOfCaractere;
            }}
        returnedData.textData+=String.fromCharCode(tempCaractere);
        tempKey+=returnedData.step;
        while(tempKey<0 || tempKey>NumberOfCaractere){
            while(tempKey<0){
                tempKey=NumberOfCaractere-tempKey;
            }
            while(tempKey>NumberOfCaractere){
                tempKey=tempKey-NumberOfCaractere;
            }}
    }
    return returnedData;
}
module.exports.Encryptor=function(text,key,step){//encrypte data with know key and step
    let tempCaractere;
    let returnedData={
        textData:"",
        key:key,
        step:step
    };
    let tempKey=key;
    for(let i=0;i<text.length;i++){
        tempCaractere=text.charCodeAt(i)+tempKey;
        while(tempCaractere<0 || tempCaractere>NumberOfCaractere){
            while(tempCaractere<0){
                tempCaractere=NumberOfCaractere-tempCaractere;
            }
            while(tempCaractere>NumberOfCaractere){
                tempCaractere=tempCaractere-NumberOfCaractere;
            }}
        returnedData.textData+=String.fromCharCode(tempCaractere);
        tempKey+=returnedData.step;
        while(tempKey<0 || tempKey>NumberOfCaractere){
            while(tempKey<0){
                tempKey=NumberOfCaractere-tempKey;
            }
            while(tempKey>NumberOfCaractere){
                tempKey=tempKey-NumberOfCaractere;
            }}
    }
    return returnedData;
}
module.exports.Decryptor = function (text,key,step){//decrypt data with the key and the step
    let returnedData={
        textData:""
    };
    for(let i=0;i<text.length;i++){
        tempCaractere=text.charCodeAt(i)-key;
        while(tempCaractere<0 || tempCaractere>NumberOfCaractere){
        while(tempCaractere<0){
            tempCaractere=NumberOfCaractere-tempCaractere;
        }
        while(tempCaractere>NumberOfCaractere){
            tempCaractere=(tempCaractere-NumberOfCaractere);
        }
    }
        returnedData.textData+=String.fromCharCode(tempCaractere);
        key+=step;
        while(key<0 || key>NumberOfCaractere){
            while(key<0){
                key=NumberOfCaractere-key;
            }
            while(key>NumberOfCaractere){
                key=key-NumberOfCaractere;
            }}
    }
    return returnedData;
}