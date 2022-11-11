const {createApp} = Vue;

createApp({
    data(){
        return{
            numberOfEmail:10,
            emails:[],
            mailUrl:"https://flynn.boolean.careers/exercises/api/random/mail",
            isEmailRequestEnded: false,
        }
    },
    methods:{
        createEmail(){
            this.isEmailRequestEnded = false;
            console.log(this.isEmailRequestEnded);
            this.emails = [];
            for(let i = 0; i < this.numberOfEmail; i++){
                axios.get(this.mailUrl)
                .then( result =>{
                    this.emails.push(result.data.response);
                    if(this.emails.length === this.numberOfEmail){
                        this.isEmailRequestEnded = true
                        console.log(this.isEmailRequestEnded);
                    }
                })
            }
            
        }
    },mounted(){
        this.createEmail();
    }
}).mount('#app');