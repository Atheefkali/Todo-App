// document.addEventListener("DOMContentLoaded", ()=>{
//     const inpfield = document.querySelector("#inputfield")
//     const Errmassage = document.querySelector("#InputError")
//     const addTask = document.querySelector("#AddTaskbutt")


//     const AddtaskFunction = ()=>{
//         const inputfieldvalid = inpfield.value.trim().length > 2;
//         Errmassage.style.display = inputfieldvalid ? "block": "none"
//     }

//     addTask.addEventListener("click", ()=>{
//         AddtaskFunction();
//     });

//     inpfield.addEventListener("input", () => {
//         AddtaskFunction()
//         // Errmassage.style.display =
//         // inpfield.value.trim().length > 2 ? "block" : "none";
//       });
  
// })

document.addEventListener("DOMContentLoaded", () => {
    const inpfield = document.querySelector("#inputfield");
    const Errmassage = document.querySelector("#InputError");
    const addTask = document.querySelector("#AddTaskbutt");
  
    const AddtaskFunction = () => {
      const inputfieldvalid = inpfield.value.trim().length > 1;
      Errmassage.style.display = inputfieldvalid ? "none" : "block";
    };
  
    addTask.addEventListener("click", () => {
      AddtaskFunction();
    });
  
    inpfield.addEventListener("input", () => {
      AddtaskFunction();
    });
  });
  