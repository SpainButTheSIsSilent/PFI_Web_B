import Model from './model.js';

export default class Photo extends Model {
    constructor()
    {
        super();
        this.addField('Id', 'string');
        this.addField('PhotoId', 'string');   
        this.addField('Name', 'string');        
    }

}