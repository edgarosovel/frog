class UI {
    
    constructor(){
        this.playButton = document.getElementById('buttonPlay');
        this.mainDiv = document.getElementById('UI');
        this.inputName = document.getElementById('inputName');

        
    }
    
    awaitForStartButton(callback){
        this.playButton.addEventListener('click', callback);
    }

    getUserName(){
        return this.inputName.value;
    }

    hide(){
        this.mainDiv.classList.remove('visible');
    }

    show(){
        this.mainDiv.classList.add('visible');
    }

}