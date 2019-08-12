/*CMD
  command: 💰Balance💰
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Your current balance: <hi> bitcoins
  keyboard: 
  aliases: 
CMD*/

let bal = Libs.ResourcesLib.userRes("balance");
let x = User.setProperty("hi",bal.value().toFixed(8),"String")
let hi = User.getProperty("hi")

