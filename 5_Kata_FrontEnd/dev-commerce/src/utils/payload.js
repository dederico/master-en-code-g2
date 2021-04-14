/* eslint-disable no-unused-expressions */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-anonymous-default-export
export default function payload() {
    const token = window.localStorage.getItem('token');
    if (token) {

        const [header, payload, signature] = token.split('.');
        const base64 = payload.replace('-', '+').replace('_', '/');
        const payloadObject = JSON.parse(window.atob(base64));
        return payloadObject;
    } else {
        null
    }
}