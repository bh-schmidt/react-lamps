const Ok = 200;

export default class HttpStatusCode {
    static isOk(response) {
        return response.status === Ok;
    }
}