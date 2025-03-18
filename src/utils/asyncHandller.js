///////// this is an example of how to use asyncHandller with promise
const asyncHandller = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
}
export default asyncHandller;










// //////// this is an example of how to use asyncHandller with try catch block

// const asyncHandller = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             sucsses:false,  
//             message:error.message});
        
//     }
// }