import React, { useEffect, useState } from 'react'
import { Loader } from '../Common/Loader'
import { addGameApi, deleteImageSlider, getImageSliderData, updateGameName, uploadImageSLider } from '../service/service';
import DataTable, { createTheme } from 'react-data-table-component';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

const ImageSlider = () => {
  const [data, setData] = useState([])
  const[loader,setLoader]=useState(false)
  const[show,setShow]=useState(false)
  const[edit,setEdit]=useState()
  const[newGameName,setnewGameName]=useState("")
  const[gameId,setGameId]=useState("")
  const[formInput,setFormInput]=useState("")
  const[upload_image,setUploadImage]=useState("")



const handleDeleteSliderImage=(id)=>{
    setLoader(true)
    deleteImageSlider(id).then((res)=>{
        setLoader(false)  
        handleGameNameList()
      }).catch((err) => {
        setLoader(false)
        alert(err || "something went wrong ")
      })
}


  const handleSubmitEdit =(value)=>{
      
    setLoader(true)
    updateGameName(value).then((res)=>{
      setLoader(false)
      handleClose()
      handleGameNameList()
      
    }).catch((err) => {
      setLoader(false)
      alert(err || "something went wrong ")
    })


  }
  const handleClose =()=>{
    setShow(false)
  }
  useEffect(() => {
    handleGameNameList()
  }, [])

  const handleGameNameList = () => {
    setLoader(true)
    getImageSliderData("normal").then((res) => {
      setLoader(false)
      setData(res.data.data)
    }).catch((err) => {
      setLoader(false)
      alert(err || "something went wrong ")
    })
  }

  const handleUpload= () => {
      let reqBody ={
        image_url:upload_image,
        status:true
      }
    setLoader(true)
    uploadImageSLider(reqBody).then((res) => {
      setLoader(false)
      handleGameNameList()
      handleClose()
      
     
    }).catch((err) => {
      setLoader(false)
      alert(err || "something went wrong ")
    })
  }


  const columns = [
    {
      name: 'Sr No',
      cell: (row,index) => {
        return (
          <p >
            {row?.id}
          </p>
        )
      },
      width: "11%",

      sortable: true,
      center: true,

    },
    {
      name: 'Slider Image',
      cell: (row, index) => {
        return (
            <img src={row.image_url} alt="logo" width={200} height={150} style={{margin:"10px"}}/>
        )
      },
      sortable: true,
      width: "16%",
      center: true,

    },
    {
      name: 'Display Order',
      selector: row => row.id,
      width: "16%",
      sortable: true,
      center: true,
    },
    {
      name: 'Creation Date',
      selector: row => moment(row.created_at).format("DD-MM-YYYY"),
      width: "16%",
      sortable: true,
    },

    {
      name: 'Status',

      cell: (row, index) => {


        return (
          <span className={row?.status ? "btnspan success" : "btnspan danger"} onClick={()=>{
            handleSubmitEdit({
              status:!row?.status?"True":"False" ,
              id:row?.id
            })
          }}>
            {row?.status ? "Yes" : "No"}
          </span>
        )
      },
      width: "16%",
    },

  
    {
      name: 'Action',

      cell: (row, index) => {
        return (
          <span className='d-flex ' >
            <button className='btn btn-danger m-1 btn-sm' onClick={()=>{
              handleDeleteSliderImage(row.id)
             
            }
              }>
              Delete
            </button>
           
          </span>
        )
      },
      width: "30%",
      center: true,

    },


  ];
  createTheme('dark', {
    background: {
      default: 'transparent',
    },
  });
console.log("data",formInput)



  return (
    <div className="content-wrapper">
      {loader?<Loader/>:null}

      <div className="container-fluid">
        <div className="card mb-3">
          <div className="card-header flex align-center space-between">
            <div><i className="fa fa-table"></i> <b>Slider Image Management</b></div>
            <div className='add-name'>
              <button className='btn btn-danger m-1 btn-sm' onClick={()=>setShow(true)}>Add Image Slider</button>
            </div>

          </div>


        </div>
      </div>
      <div >
        <DataTable
          columns={columns}
          data={data}
          pagination
          sortable
        />
      </div>
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Game</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input name="image_url" type="text" value={upload_image} onWheel={(e) => e.target.blur()} onChange={(e)=>{
                      setUploadImage(e.target.value)
                  }} placeholder="Enter Game Name " className="form-control"/><br/>
                
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e)=>{
                      e.preventDefault()
                      handleUpload()
                    }}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>





            <Modal show={edit} onHide={()=>setEdit(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Image Url</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input name="game" type="text" onWheel={(e) => e.target.blur()} placeholder="Paste Url Here " className="form-control" onChange={(e)=>{
                    setnewGameName(e.target.value)
                  }}/><br/>
                  
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setEdit(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>{
                      handleSubmitEdit({
                        market_name:newGameName,
                        id:gameId
                      })
                    }}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>

        


    </div>
  )
}

export default ImageSlider



