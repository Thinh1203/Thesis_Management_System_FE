export const checkPhoneNumber  = (phone) => {
    return /^0[0-9]{9}$/g.test(phone);
}
export const checkEmail = (email) => {
    return /^(([\w]+)(\.*))+@((\w+)(\.)){1,}(com|net|co|vn|edu|gov|biz|org|uk)$/g.test(email);
}