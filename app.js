// !login button event handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const TransactionArea =  document.getElementById("Transaction-area");
    TransactionArea.style.display = "block";
})
// !Deposit button event handler
 const DepositBtn = document.getElementById("adddeposit");
   DepositBtn.addEventListener("click",function(){
      const depositAmount = document.getElementById("depositAmount").value;
      //console.log(depositAmount);
     const depositNumber = parseFloat(depositAmount);
     // console.log(depositAmount);
    //  const currentDeposit = document.getElementById("currentDeposit").innerText;
    //  const currentDepositNumber = parseFloat(currentDeposit);
    //  const totaldeposit = depositNumber + currentDepositNumber;
    //   //console.log(totaldeposit);
    //   document.getElementById("currentDeposit").innerText = totaldeposit;

      // !addBalance button event handler
        
       updatespanText("currentDeposit",depositNumber);   
       updatespanText("currentBalance",depositNumber);
        document.getElementById("depositAmount").value = "";
   })
      
   //! withdraw button event handler
    
   const withdrawbtn = document.getElementById("addwithdraw");
     withdrawbtn.addEventListener("click",function(){
        
      const withdrawNumber =  getInput("withdrawAmount");

       updatespanText("currentwithdraw", withdrawNumber);
      
      //  console.log(withdrawNumber);
      // const currentWithdraw = document.getElementById("currentwithdraw").innerText;
      // const currentwithdrawNumber =  parseFloat(currentWithdraw);
      // const totalwithdraw = currentBalance - currentwithdrawNumber;

     })

     function getInput(id){
      const withdrawAmount = document.getElementById(id).value;
       const withdrawNumber = parseFloat(withdrawAmount);
       return withdrawAmount
     }



   function updatespanText(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currenteNumber = parseFloat(current);
    const total = depositNumber + currenteNumber;
    document.getElementById(id).innerText = total;
     if(!depositNumber){
      alert("Give Something Money");
     }
   }

      // !Withdraw button event handler