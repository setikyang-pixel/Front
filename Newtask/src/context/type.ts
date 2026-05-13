export interface elem  {
    id: number,
    name:string,
    salary: number,
    age: number,
}

export type UsersState = {
    user:elem[]
    remove:(id:number)=>void
    addUser:(obj:elem)=>void
    upSalary:(id:number)=>void
    downSalary:(id:number)=>void
}