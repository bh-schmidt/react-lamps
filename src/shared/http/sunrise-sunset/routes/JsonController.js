export default class JsonController {
    static defaultGet = (latitude, longitude) => {
        return `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today&formatted=0`;
    }
}