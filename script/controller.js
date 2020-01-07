// INITIALIZER

// document.addEventListener('DOMContentLoaded', () => {
//     debugger;
//     var scree = document.getElementsByClassName('RnEpo Yx5HN   ')[0];

//     if (scree) 
//         document.getElementById('alert1').innerHTML = 'primeira certo';
//     else document.getElementById('alert1').innerHTML = 'primeira errado';

//     Controller.removeBlock();
// });

// Controller DEFINITION

function Controller () {
    this.removeBlock = () => {
        debugger;

        var grayScreen = document.getElementsByClassName('RnEpo Yx5HN   ')[0];

        if (grayScreen) {
            
            this.removeElement(grayScreen);
    
            this.unlockElements([
                document.getElementsByTagName('body')[0],
                document.getElementsByClassName('_9eogI E3X2T')[0],
                document.getElementsByClassName('Z2m7o')[0],
                document.getElementById('fb-root'),
            ]);

            this.showMessage('Instagram liberado');
        }
        else {
            this.showMessage('Bloqueio não encontrado');
        }
    };

    this.showMessage = (message) => {
        //document.getElementById('alert').innerHTML = message;
        alert(message);
    }

    this.removeElement = (element) => {
        element.parentNode.removeChild(element);
    }

    this.unlockElements = (elements) => {
        elements.forEach((element) => {
            this.unlockScroll(element);
        });
    }

    this.unlockScroll = (element) => {
        element.style.overflow = 'scroll';
    }
}

// Controller SINGLETON

Controller.instance = null;

Controller.getInstance = () => {
    if (!Controller.instance)
        Controller.instance = new Controller();
    return Controller.instance;
}

Controller.removeBlock = () => {
    Controller.getInstance().removeBlock();
}