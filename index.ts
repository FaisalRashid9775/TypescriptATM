#!/usr/bin/env node
import inquirer from 'inquirer'
import chalkanimation from "chalk-animation"


let balance = 100000
const stop =()=>{
  return new Promise((res) =>{
    setTimeout(res,2000)
  })
}
async function Welcome(){
  let welcomeMessage= chalkanimation.rainbow('Welcome TO PIAIC Bank')
  await stop()
  welcomeMessage.stop()
}
await Welcome()
async function ATM() {
  
  let userpin = 1234
  let pinanswer = await inquirer.prompt([{
    name:'pin',
    type :'number',
    message:'Enter your pin'
  }])
  if (pinanswer.pin === userpin){
    console.log('Password Match')
    let operation= await inquirer.prompt([{
      name: 'Operations',
      type:'list',
      message : 'Choose function which you want to perfoams',
      choices : ['Check balance', 'Fast Cash','Withdraw']
    }])
    
    if(operation.Operations==='Check balance'){
     
      if (balance<=0){
        console.log('You have no Balance')
      }
      else {
        console.log(`Your Balance is ${balance}`)
      }
    }
    if (operation.Operations==='Fast Cash'){
      let operation= await inquirer.prompt([{
        name: 'Operations',
        type:'list',
        message : 'Choose amount which you want to withdraw',
        choices : ['20000','10000','5000','1000','500']
      }])
      if(operation.Operations>=balance){
        console.log(`You do not have enough money`)
      }
      else{
  
        if (operation.Operations==='20000'){
          balance= balance-20000
          console.log('Transaction Sucessful')
          console.log(`Your new Balance is : ${balance}`)
        }
        if (operation.Operations==='20000'){
          balance= balance-20000
          console.log('Transaction Sucessful')
          console.log(`Your new Balance is : ${balance}`)
        }
        if (operation.Operations==='10000'){
          balance= balance-10000
          console.log('Transaction Sucessful')
          console.log(`Your new Balance is : ${balance}`)
        }
        if (operation.Operations==='5000'){
          balance= balance-5000
          console.log('Transaction Sucessful')
          console.log(`Your new Balance is : ${balance}`)
        }
        if (operation.Operations==='1000'){
          balance= balance-1000
          console.log('Transaction Sucessful')
          console.log(`Your new Balance is : ${balance}`)
        }
        if (operation.Operations==='500'){
          balance= balance-500
          console.log('Transaction Sucessful')
          console.log(`Your new Balance is : ${balance}`)
        }
      }
    }
    if (operation.Operations==='Withdraw'){
      let withdrawAmount= await inquirer.prompt([{
        name:'withdraw',
        type :'input',
        message:'Enter your Amount'
      }])
      if (withdrawAmount.withdraw>balance){
        console.log(`Insufficient Balance`)
      }
      else{
        balance=balance-withdrawAmount.withdraw
        console.log('Transaction Sucessful')
          console.log(`Your new Balance is : ${balance}`)
  
      }
    }
  
  }
  else{
    console.log('Enter Correct ID or Password')
  }
}
async function restart(){
  do {
    await ATM()
    var restartAgain = await inquirer.prompt([
      {
        type : 'input',
        name : 'start',
        message :('Do you want to do more Transaction? if yes type [Y]')
      }
    ])
  
  }  while(restartAgain.start== 'Y')
}
 restart()