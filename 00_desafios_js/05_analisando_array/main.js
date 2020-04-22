//Encontrar a fração dos elementos positivos, negaticos e zeros de um Array
function calculate(paramArray) {
    const totalEle = paramArray.length;
    const positivos = paramArray.filter(vlr => {
        if( vlr > 0) return vlr
    }).length;
    const negativos = paramArray.filter(vlr => {
        if( vlr < 0) return vlr
    }).length;
    const zeros = paramArray.filter(vlr => {
        if( vlr === 0) return paramArray.length
    }).length;
    

    const msg = `Postivos: ${formatMsg(totalEle, positivos)}\n`+
                `Negativos: ${formatMsg(totalEle, negativos)}\n`+
                `Zeros: ${formatMsg(totalEle, zeros)}`;
    return msg;
}
const formatMsg = ((total, param) => (param / total).toFixed(3));

const array1 = new Array(-1,2, 65, 8, 45, -7, -9, 0);
const array2 = new Array(-1, 0, 2, 0, -35, 0, 0, -65, -32, -98, 0, 65, 8, 45, -7, -9, 0);
console.log(calculate(array1));