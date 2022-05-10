import mongoose, { Model, Schema } from 'mongoose';
import { Blog } from '../interfaces/blog';

export interface IBlog extends Blog {}


const blogSchema = new Schema({
    title: { type: String, required: true},
    slug: { type: String, required: true},
    content: { type: String, required: true}
});


const BlogModel: Model<IBlog> = mongoose.models.Blog || mongoose.model('Blog', blogSchema );

export default BlogModel;