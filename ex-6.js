let height = undefined;
let result;
function checkHight(height){
 return height ?? `Height is not defined`
}

result = checkHight(height)

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
