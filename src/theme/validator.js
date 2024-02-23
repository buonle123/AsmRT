export const Validator = {
    username: (username, setUsernameError) => {
        let errorMessage = '';
        if (!username) {
            errorMessage = 'Username không được bỏ trống!';
        } else if (username.length < 5) {
            errorMessage = 'Username phải có ít nhất 5 kí tự';
        } else { errorMessage = '' }
        setUsernameError(errorMessage);
        return errorMessage;
    },
    password: (password, setPasswordError) => {
        let errorMessage = '';
        if (!password) {
            errorMessage = 'Password không được bỏ trống!';
        } else if (password.length < 6) {
            errorMessage = 'Password phải có ít nhất 6 kí tự';
        } else errorMessage = '';
        setPasswordError(errorMessage);
        return errorMessage;
    },
    email: (email, setEmailError) => {
        let errorMessage = '';
        if (!email) {
            errorMessage = 'Email không được bỏ trống!';
        } else if (!isValidEmail(email)) {
            errorMessage = 'Email không đúng định dạng';
        } else errorMessage = '';
        setEmailError(errorMessage);
        return errorMessage;

    },
    phone: (phone, setPhoneError) => {
        let errorMessage = '';
        if (!phone) {
            errorMessage = 'Phone không được bỏ trống!';
        } else if (!isValidPhone(phone)) {
            errorMessage = 'Số điện thoại không đúng định dạng';
        } else errorMessage = '';
        setPhoneError(errorMessage);
        return errorMessage;

    }
}
const isValidEmail = (email) => {
    // Thực hiện kiểm tra định dạng email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPhone = (phone) => {
    // Thực hiện kiểm tra định dạng số điện thoại
    return /^(0[2689]|0[93578])[0-9]{8}$/.test(phone);
};