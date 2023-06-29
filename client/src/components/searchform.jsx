import React from "react"
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {getRequest} from '../api/controllers'
import {getPhotos} from '../Features/photosSlice'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'


export function SearchForm(props){
    const navigate= useNavigate();
    const page = 1;
    const dispatch = useDispatch()

    const get = async (e)=>{
        e.preventDefault();
        if(e.target[0].value==="") return;
        const res = await getRequest(e.target[0].value,e.target[1].value);
        dispatch(getPhotos(res.data.photos))
        navigate(`../&search=${e.target[0].value}&page=${e.target[1].value}`,{replace:true})
    }
    
    return(
        <form onSubmit={get} className="d-flex justify-content-center w-50">
            <input type="text" name="query" className="form-control form-control-sm mx-2" id='srch-form'/>
            <input type="number" name="page" defaultValue={page} className="d-none"/>
            <button type="submit" className="btn" id="btn-form"> <i className="bi bi-search btn-form-icon"></i></button>
        </form>
    )
}

