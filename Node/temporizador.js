const schedule = require('node-schedule')
// o segundo asterisco no caso seria a hora mas pra n ter erro kk
const tarefa1 = schedule.scheduleJob('*/5 * 16 * * *', function(){
    console.log('executando tarefa1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('cancelando tarefa1!')
}, 20000)//cancelando tarefa depois de 20 segundos

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 6)]//executando de domingo a sabado
//regra.hour = 12 comentei pq n tava nessa hora 
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('executando tarefa2!', new Date().getSeconds())
})

