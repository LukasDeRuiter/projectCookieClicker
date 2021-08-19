class Cookie {

    //constructor
    constructor(clickPower, image, level) {
        this.clickPower = clickPower;
        this.level = level;
        this.image = image;
    }

    //getters and setters
    getClickPower() {
        return this.clickPower;
    }

    setClickPower(clickPower) {
        this.clickPower = clickPower;
    }

    getLevel() {
        return this.level;
    }

    setLevel(level) {
        this.level = level;
    }

    getImage() {
        return this.image;
    }

    setImage(image) {
        this.image = image;
    }

}