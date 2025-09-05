import { Passenger } from './11-optional-chaining';
export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Matias'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const printChildren = (passenger: Passenger) =>{
    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger2);
printChildren(passenger1);