import {useState,useEffect} from 'react'
import {getPropertyDetail} from '../service/properties.js'
import { Link, useNavigate,useLocation} from 'react-router-dom'

function PropertyBook()
{
    const loc =useLocation()
    const token=sessionStorage['token']
    
    return (
        <div></div>
    )
}
export default PropertyBook