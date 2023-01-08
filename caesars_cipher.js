
function rot13(str){
    var solved=""
    for (let i=0; i<str.length; i++){
        var asciinum=str[i].charCodeAt();
        if(asciinum>=65 && asciinum<=77){
        solved+=String.fromCharCode(asciinum+13)}
        else if(asciinum>=78 && asciinum<=90){
            solved+=String.fromCharCode(asciinum-13)
        }
        else{
            solved+=str[i];
        }
    }
    return solved;
}

rot13("SERR PBQR PNZC")
