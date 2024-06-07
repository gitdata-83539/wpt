import { Link, useNavigate,useLocation } from 'react-router-dom'
import {useState,useEffect} from 'react'
import {getPropertyDetail} from '../service/properties.js'
import config from '../service/config.jsx'
import Properties from './screens/Properties';
function PropertyDetails(){
 const loc =useLocation()
     
     const [properties, setProperties] = useState()
     const loadfunction=async(id)=>
     {
         const result=await getPropertyDetail(id)
         if (result['status'] == 'success') {
            console.log(result['data'])
            setProperties(result['data'])
            
          }
     }
     useEffect(() => {
        loadfunction(loc.state.id)    
      }, [])
    return( 

        <div>{ properties && 
        <div>
            <center><u><h2>Property Details</h2></u></center>
            <table className='table table-striped mt-5'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Address</th>
              <th>Contact Name</th>
              <th>Contact Number</th>
              <th>Rent</th>
              
            </tr>
          </thead>
          <tbody>
            
                <tr>
                  
                 
                 <td>{properties['title']}</td> 
                  <td>{properties['address']}</td>
                  <td>{properties['ownerName']}</td>
                  <td>{properties['contactNo']}</td>
                  <td>{properties['rent']}</td> 
                  
                </tr>
              
            
          </tbody>
        </table>
        </div>
        }  
        </div>
    )
}
export default PropertyDetails