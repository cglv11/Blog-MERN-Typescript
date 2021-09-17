import React from "react";
import { Publication } from "./Publication";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import * as publicationService from './PublicationService'
import moment from "moment";

import "./PublicationItem.css";

interface Props {
  publication: Publication;
  loadPublications: () => void;
}

const PublicationItem = ({ publication, loadPublications }: Props) => {
  const history = useHistory();

const handleDelete = async (id: string) => {
  await publicationService.deletePublication(id)
  loadPublications();
}

let isVideo = publication.url;

// let newDate = new Date()
let date = moment().format('MM-DD-YYYY hh:mm:ss')

  return (
    <div className="col-md-9 my-2">
      <div
        className="card card-body publication-card border-4"
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex justify-content-between">
          <h1 onClick={() => history.push(`/update/${publication._id}`)}>
            {publication.title}
          </h1>
          <span
            className="text-danger"
            onClick={() => publication._id && handleDelete(publication._id)}
          >
            X
          </span>
        </div>
        <p>{publication.description}</p>
        <div>
         {
            isVideo ? 
              <div className="embed-responsive embed-responsive-1by1">
                <ReactPlayer width='auto' url={publication.url} />
              </div>             
              : 
              <div>
                <h1></h1>  
              </div>
          }    
        </div>
        <div> 
          {date} 
        </div> 
      </div>
    </div>
  );
};

export default PublicationItem;
