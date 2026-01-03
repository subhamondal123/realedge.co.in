import { REGEX } from "@/utils/Regex";

export function validateEmail(data) {
    const regex = REGEX.EMAIL_REGEX;
    return regex.test(data);
}

export function allowOnlyNumbers(value) {
    return value.replace(/[^0-9]/g, "");
}
