const FloorsCount = 5;
const WindowsCount = 3;

export default class FloorFactory {
    static generateFloors = () => {
        var floors = [];
        for (let i = 0; i < FloorsCount; i++) {
            floors.push({
                id: i,
                windows: this.generateWindows()

            })
        }
        return floors;
    }

    static generateWindows = () => {
        var windows = [];
        for (let i = 0; i < WindowsCount; i++) {
            windows.push({
                id: i,
                lightOn: false

            })
        }
        return windows;
    }
}