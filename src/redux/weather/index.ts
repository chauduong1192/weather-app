import { reducerRegistry } from '../reducer-registry';
import reducer from './reducer';

const key = 'weather';
reducerRegistry.register(key, reducer);

const exportedObject = { [key]: reducer }
export { key };
export default exportedObject;
