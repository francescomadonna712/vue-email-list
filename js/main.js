const { createApp } = Vue

createApp({
    data() {
        return {
            mails: [],
            numbeEmails: 10,
        }
    },

    methods: {
        getMail(){
          for(let i = 0; i < this.numbeEmails; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((res)=>{
              this.mails.push(res.data.response);
    
            })
    
          }
        }
      },

      mounted(){
        this.getMail()
      }
}).mount('#app')