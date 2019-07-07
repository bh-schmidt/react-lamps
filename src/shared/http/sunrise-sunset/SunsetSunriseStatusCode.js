const Ok = 'OK';

export default class SunsetSunriseStatusCode {
    static isOk(value) {
        return value.status === Ok;
    }
}