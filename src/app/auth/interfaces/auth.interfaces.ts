export interface Login {
    email:string,
    password:string
}

export interface Register{
 
        firstname: string,
        lastname : string | null,
        email:string,
        password:string,
        password2: string
    
}

export interface ResponseAuth{
    token:string
}

