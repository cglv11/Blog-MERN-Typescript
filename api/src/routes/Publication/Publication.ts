import {Schema, model} from 'mongoose'

const publicationSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        trim: true,
        unique: false
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('publication', publicationSchema);