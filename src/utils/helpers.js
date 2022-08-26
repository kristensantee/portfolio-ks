export function validateEmail(email) {
    const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return re.test(String(email).toLowerCase());
};

export function checkName(name) {
    const inputName = /^[a-zA-Z ]{2,30}$/;
    return inputName.test(String(name).toLowerCase())
}