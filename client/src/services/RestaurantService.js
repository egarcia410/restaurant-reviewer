import Api from './Api'

export default {
    create(restaurant) {
        return Api().post('create', restaurant)
    }
}