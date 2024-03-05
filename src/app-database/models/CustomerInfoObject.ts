import { BSON } from "realm";

class CustomerInfoObject extends Realm.Object<CustomerInfoObject> {
    entity_id?: string
    website_id?: string
    email?: string
    group_id?: string
    increment_id?: string
    store_id?: string
    created_at?: string
    updated_at?: string
    is_active?: string
    disable_auto_group_change?: string
    created_in?: string
    prefix?: string
    firstname?: string
    middlename?: string
    lastname?: string
    suffix?: string
    dob?: string
    password_hash?: string
    rp_token?: string
    rp_token_created_at?: string
    default_billing?: string
    default_shipping?: string
    taxvat?: string
    confirmation?: string
    gender?: string
    failures_num?: string
    first_failure?: string
    lock_expires?: string
    session_cutoff?: string
    address?: string
    avatar?: string
    orders?: string
    total_number_of_completed_orders?: string
    total_number_of_unfinished_orders?: string
    total_number_of_returned_orders?: string
    total_amount_paid?: string
    total_amount_owed?: string
    static schema: Realm.ObjectSchema = {
        name: 'CustomerInfoObject',
        properties: {
            entity_id: 'string?',
            website_id: 'string?',
            email: 'string?',
            group_id: 'string?',
            increment_id: 'string?',
            store_id: 'string?',
            created_at: 'string?',
            updated_at: 'string?',
            is_active: 'string?',
            disable_auto_group_change: 'string?',
            created_in: 'string?',
            prefix: 'string?',
            firstname: 'string?',
            middlename: 'string?',
            lastname: 'string?',
            suffix: 'string?',
            dob: 'string?',
            password_hash: 'string?',
            rp_token: 'string?',
            rp_token_created_at: 'string?',
            default_billing: 'string?',
            default_shipping: 'string?',
            taxvat: 'string?',
            confirmation: 'string?',
            gender: 'string?',
            failures_num: 'string?',
            first_failure: 'string?',
            lock_expires: 'string?',
            session_cutoff: 'string?',
            address: 'string?',
            avatar: 'string?',
            orders: 'string?',
            total_number_of_completed_orders: 'string?',
            total_number_of_unfinished_orders: 'string?',
            total_number_of_returned_orders: 'string?',
            total_amount_paid: 'string?',
            total_amount_owed: 'string?',
        },
    };
}
export default CustomerInfoObject;