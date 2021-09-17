import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Publication } from "./Publication";
import * as publicationService from './PublicationService';
import {toast} from 'react-toastify';
import { useHistory, useParams } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>;

interface Params {
  id: string;
}

const PublicationForm = () => {

  const history = useHistory(); //take to another page
  const params = useParams<Params>();

  const initalState = {title: "", description:"", url:""}
 
  const [publication, setPublication] = useState<Publication>(initalState)

  const handleInputChange = (e: InputChange) => {
    setPublication({...publication, [e.target.name]: e.target.value})
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await publicationService.createPublication(publication);
      toast.success('New publication added')
      setPublication(initalState);
    } else {
      await publicationService.updatePublication(params.id, publication)
    }

    history.push('/publications')
  }

  const getPublication = async (id: string) => {
     const res = await publicationService.getPublication(id);
     const { title, description, url } = res.data
     setPublication({title, description, url})
  }

  useEffect(() => {
    if (params.id) getPublication(params.id);
  }, [])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Publication</h3>
            <form onSubmit ={handleSubmit} >
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a title for this publication"
                  className="form-control"
                  onChange={handleInputChange}
                  value={publication.title}
                  autoFocus
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={publication.url}
                  autoFocus
                />
              </div>

              <div className="form-group mb-3">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control" 
                  placeholder="Write a description"
                  onChange={handleInputChange}
                  value={publication.description}
                  autoFocus
                ></textarea>
              </div>
              
              {
                params.id ?
                  <button className="btn btn-info">
                    Update Publication
                  </button>
                  : 
                  <button className="btn btn-secondary">
                    Create Publication
                  </button>   
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationForm;
