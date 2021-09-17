import {RequestHandler} from 'express'
import Publication from './Publication'

// const publicationFound = await Publication.findOne({url: req.body.url});
// console.log(publicationFound);
// if (publicationFound)
//     return res.status(301).json({message: 'The URL already exists'})
export const CreatePublication: RequestHandler = async (req, res) => {

    const publication = new Publication(req.body)
    const savedPublication= await publication.save()
    res.json(savedPublication)
}

export const getPublication: RequestHandler = async (req, res) => {
    const publicationFound = await Publication.findById(req.params.id)
    if (!publicationFound) return res.status(204).json()
    return res.json(publicationFound) 
}

export const deletePublication: RequestHandler = async (req, res) => {
    const publicationFound = await Publication.findByIdAndDelete(req.params.id)
    if (!publicationFound) return res.status(204).json();
    return res.json(publicationFound) 
}

export const updatePublication: RequestHandler = async (req, res) => {
    const publicationUpdated = await Publication.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (!publicationUpdated) return res.status(204).json();
    return res.json(publicationUpdated)
} 

export const getPublications: RequestHandler = async (req, res) => {
    try {
        const publication = await Publication.find()
        return res.json(publication) 
    } catch (error) {
        res.json(error)
    }
}