import Authorizations from '../authorizations.js';
import Repository from '../models/repository.js';
import PhotoModel from '../models/photo.js';
import PhotoLikeModel from '../models/photoLike.js';
import Controller from './Controller.js';

export default
    class PhotosLikes extends Controller {
    constructor(HttpContext) {
        super(HttpContext, new Repository(new PhotoModel()), Authorizations.admin());
        this.photoLikesRepository = new Repository(new PhotoLikeModel());
    }
    getlikes(photoId) {
        this.HttpContext.response.JSON(this.repository.findByField("PhotoId", photoId), this.repository.ETag, true, Authorizations.admin());
    }
    createlike(data) {
        data = this.photoLikesRepository.add(data);
        this.HttpContext.response.created(data);
    }
    deletelike(id) {
        this.photoLikesRepository.remove(id)
        this.HttpContext.response.accepted("Deleted");
    }
}