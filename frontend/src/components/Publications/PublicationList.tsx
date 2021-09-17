import React, { useEffect, useState } from 'react'
import {Publication} from './Publication';
import * as publicationService from './PublicationService';
import PublicationItem from './PublicationItem';

const PublicationList = () => {

    const [publications, setPublications] = useState<Publication[]>([])

    const loadPublications = async () => {
        const res = await publicationService.getPublications()
        setPublications(res.data)

        const formatedPublications = res.data.map(publication => { //order publications by date
            return {
                ...publication,
                createdAt: publication.createdAt ? new Date(publication.createdAt): new Date(), //if pub exist, create a new type of pub, otherwise create a date
                UpdatedAt: publication.updatedAt ? new Date(publication.updatedAt): new Date(),
            }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()); 

        setPublications(formatedPublications);
    }

    useEffect(() => {
        loadPublications()
    }, [])

    return (
        <div className="row">
            {publications.map((publication) => {
                return <PublicationItem publication={publication} key={publication._id} loadPublications={loadPublications}/>         
            })}
        </div>
    )
}

export default PublicationList
