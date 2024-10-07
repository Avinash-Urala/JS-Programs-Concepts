/* Transpilers is a software that translates one source code to another 
   take modern code and rewrite it using older syntax  
*/

function findHeight(height) {
// before running transpiler (Older browsers don't understand nullish coalescing)   
const height = height ?? 10;

// after running transpiler
const height = (height !== undefined && height !== null) ? height : 10;
}
