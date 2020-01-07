function Controller () {
    this.searchBlockScreen = () => {
        let grayScreen = document.getElementsByClassName('RnEpo Yx5HN   ')[0];
        return grayScreen;
    }

    this.removeBlock = () => {
        let grayScreen = document.getElementsByClassName('RnEpo Yx5HN   ')[0];

        this.removeElement(grayScreen);
    
        this.unlockElements([
            document.getElementsByTagName('body')[0],
            document.getElementsByClassName('_9eogI E3X2T')[0],
            document.getElementsByClassName('Z2m7o')[0],
            document.getElementById('fb-root'),
        ]);

        this.showMessage('Block removed');
    };

    this.showMessage = (message) => {
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

Controller.searchBlockScreen = () => {
    return Controller.getInstance().searchBlockScreen();
}

// INITIALIZE

var lockSearch = (e) => {
    if (Controller.searchBlockScreen()) {
        Controller.removeBlock();
        window.removeEventListener('scroll', lockSearch, false);
    }
}

window.addEventListener('scroll', lockSearch, false);