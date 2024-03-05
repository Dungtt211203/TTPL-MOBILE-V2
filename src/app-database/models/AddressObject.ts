
import { Realm } from '@realm/react';



export class addressObject extends Realm.Object<addressObject> {
    id!: number
    customer_id?:number
    region_id?:number
    country_id?:string

    static schema = {
        name: 'addressObject',
        properties: {
            id: 'number',
            customer_id:'number',
            region_id:'number',
            country_id:'string'
        },
    };
}
