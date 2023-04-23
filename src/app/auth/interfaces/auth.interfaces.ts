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


export interface Task{
    id: number,
    nameTask: string,
    descriptionTask: string,
    startDate: Date,
    limitDate: Date,
    complet: boolean
}
