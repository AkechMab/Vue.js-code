new Vue({
    el:"#app",
    data:{
        state: true,
        inputName:'',
        names:[],
        showError: false,
        result: ''
    },
    methods:{
        addNameToList(){
            if(this.validateTheList(this.inputName))
            {
                this.names.push(this.inputName);
                this.inputName = "";
                this.showError = false;
            }
            else if(!this.validateTheList(this.inputName))
            {
                this.showError = true;
            }
        },
        validateTheList(value)
        {
            return value.trim().length != 0 ? true : false
        },
        showResults(){
            let rand = this.names[Math.floor(Math.random()*this.names.length)]

            this.result = rand

            this.state = false;
        },
        resetApp(){
            this.state = true;
            this.names = [];
            this.result = "";

        },
        removeName(index){
            this.names.splice(index,1);
        }
    }
})

