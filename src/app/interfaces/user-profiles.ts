export interface UserProfile {
    name: string,
    phone: string,
    email: string,
    cedula: string,
    sells: Array<object>,
    role: string,
    comission: number,
    tax: number,
    image: string
}