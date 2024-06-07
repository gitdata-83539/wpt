import { Link, useNavigate,useLocation } from 'react-router-dom'
import NavBar1 from "./NavBar1";
import {useState,useEffect} from 'react'
import  config from './service/config'
import  {getProperty} from './service/properties'


function PropertyUser()
{
    const [properties, setProperties] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const loadProperties = async () => {
    const result = await getProperty()
    if (result['status'] == 'success') {
      setProperties(result['data'])
    }
  }

  useEffect(() => {
    loadProperties()    
  }, [])

  const onDelete = (index) => {
    
    properties.splice(index, 1)
    setProperties([...properties])
  }

  const onDetails = (index) => {
    
    navigate('/property-details-user', { state: { id: properties[index].id } })
  }
  const onBook = (index) => {
     
     navigate('/propertyBook', { state: { id: properties[index].id } })
   }

  return (
    <div>
      <NavBar1/>
      <center><h2 className='page-header'>Properties</h2></center>
      <Link to='/add-property' className='btn btn-primary'>
        Add Property
      </Link>
      {properties.length == 0 && (
        <h3 className='mt-5' style={{ textAlign: 'center' }}>
          There are not properties at the moment. Please use Add Property button
          to add one.
        </h3>
      )}

      {properties.length > 0 && (
        <table className='table table-striped mt-5'>
          <thead>
            <tr>
              <th>S No.</th>
              <th></th>
              <th>Title</th>
              <th>Address</th>
              <th>Contact Name</th>
              <th>Contact Number</th>
              <th>Rent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      style={{ width: 100, height: 100 }}
                      src={`${config.serverUrl}/image/${property['profileImage']}`}
                      alt=''
                    />
                  </td>
                  <td>{property['title']}</td>
                  <td>{property['address']}</td>
                  <td>{property['ownerName']}</td>
                  <td>{property['contactNo']}</td>
                  <td>{property['rent']}</td>
                  <td>
                    <button
                      onClick={() => {
                        onDelete(index)
                      }}
                      className='btn btn-danger bt-sm me-2'
                    >
                      delete
                    </button>
                    <button
                      onClick={() => {
                        onDetails(index)
                      }}
                      className='btn btn-primary bt-sm me-3'
                    >
                      details
                    </button>
                    <button
                      onClick={() => {
                        onBook(index)
                      }}
                      className='btn btn-warning bt-sm '
                    >
                      Book
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}
export default PropertyUser