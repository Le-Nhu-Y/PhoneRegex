export class PhoneRegex{
    private PHONE_REGEX:RegExp=/^[0-9]{2}[0][0-9]{9}$/;
    public validate(regex:string):boolean{
        return this.PHONE_REGEX.test(regex)
    }
}