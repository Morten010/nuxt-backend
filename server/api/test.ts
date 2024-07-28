export default defineEventHandler(async (event) => {
    console.log(event.method);
    if(event.method === 'GET'){
        return 'hello world'
    }
    
})
  