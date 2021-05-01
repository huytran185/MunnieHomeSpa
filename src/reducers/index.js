import serviceReducer from './service';
import voucherReducer from './voucher';
import typeReducer from './type';
import customerReducer from './customer';
import staffReducer from './staff';
import bookReducer from './book';
import authReducer from './auth';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    service: serviceReducer,
    voucher: voucherReducer,
    type: typeReducer,
    customer:customerReducer,
    staff:staffReducer,
    book:bookReducer,
    auth:authReducer,
})
export default rootReducer