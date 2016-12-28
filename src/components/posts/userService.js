import $ from 'jquery';
import {RootAPI} from './RootAPI.js';


export default class UserService {
    static get() {
        return $.get(`${RootAPI}/posts/`);
    }
}
