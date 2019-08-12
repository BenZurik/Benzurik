/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER
🎉Welcome <name> to Money Lion Bot🎉

💰Here you can get money💰

🔝Upgrade Your Plans🔝

♻️Invest Your Money♻️

😁Enjoy😁
  ANSWER
  keyboard: 💰Balance💰, \n⚙️Withdraw Options⚙️, \n 📊Statistics📊, 📥Deposits📥, \n♻️Re-Invest♻️, 👥Referrals👥, \n📄Investment Plans📄, \n 👑Login As Admin👑
  aliases: 🔙back🔙
CMD*/

User.setProperty("name", user.username, "string");
