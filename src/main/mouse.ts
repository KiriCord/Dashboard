import {screen} from 'electron';

class MouseMove{
    x: number;
    y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    static getCursorScreenPoint() {
        const point = screen.getCursorScreenPoint();
        return {
            x: point.x, 
            y: point.y
        }
    }


}

export {
    MouseMove
}