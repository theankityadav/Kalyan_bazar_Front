import React, { useEffect, useState } from 'react'
import { Loader } from '../Common/Loader'
import { addGameApi, gameNameApi, updateGameName } from '../service/service';
import DataTable, { createTheme } from 'react-data-table-component';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const GameName = () => {
  const [data, setData] = useState([])
  const[loader,setLoader]=useState(false)
  const[show,setShow]=useState(false)
  const[edit,setEdit]=useState()
  const[newGameName,setnewGameName]=useState("")
  const[gameId,setGameId]=useState("")
  const[formInput,setFormInput]=useState("")



  const handleInput=(e)=>{
    const{name,value}=e.target;
    console.log("pppp",e.target.value)
    setFormInput({...formInput,[name]:value})
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
    gameNameApi("normal").then((res) => {
      setLoader(false)
      setData(res.data.data)
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
      width: "10%",

      sortable: true,

    },
    {
      name: 'Game Name',
      selector: row => (row?.market_name || "NA"),
      sortable: true,
      width: "11%",

    },
    {
      name: 'Today Open',
      selector: row => row.market_opening_time,
      width: "11%",
      sortable: true,
    },
    {
      name: 'Today Close',
      selector: row => row.market_closing_time,
      width: "11%",
      sortable: true,
    },

    {
      name: 'Active',

      cell: (row, index) => {


        return (
          <span className={row?.active ? "btnspan success" : "btnspan danger"} onClick={()=>{
            handleSubmitEdit({
              active:!row?.active?"True":"False" ,
              id:row?.id
            })
          }}>
            {row?.active ? "Yes" : "No"}
          </span>
        )
      },
      width: "11%",
    },

    {
      name: 'Market Status',

      cell: (row, index) => {


        return (
          <span className={row?.market_status ? "btnspan success" : "btnspan danger"}>
            {row?.market_status ? "Open Today" : "Close Today"}
          </span>
        )
      },
      width: "20%"
    },
    {
      name: 'Action',

      cell: (row, index) => {
        return (
          <span className='d-flex ' >
            <button className='btn btn-primary m-1 btn-sm' onClick={()=>{
              setGameId(row.id)
              setEdit(true)
            }
              }>
              Edit
            </button>
            <button className='btn btn-primary m-1 btn-sm'>
              Market Off Today
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


const handleAddGame =()=>{
  setLoader(true)
  let data ={
    market_name: formInput?.gamename,
    market_code: "",
    active: true,
    market_status: true,
    market_opening_time: formInput?.open_time,
    market_type: "NORMAL",
    market_closing_time: formInput?.close_time
  }
  addGameApi(data).then((res)=>{
  console.log("res",res)
  setLoader(false)
  handleGameNameList()
  handleClose()
  }).catch((err) => {
    setLoader(false)
    alert(err || "something went wrong ")
  })
}

  return (
    <div className="content-wrapper">
      {loader?<Loader/>:null}

      <div className="container-fluid">
        <div className="card mb-3">
          <div className="card-header flex align-center space-between">
            <div><i className="fa fa-table"></i> <b>Fund Request Auto Deposit History</b></div>
            <div className='add-name'>
              <button className='btn btn-primary m-1 btn-sm' onClick={()=>setShow(true)}>Add Game</button>
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
                  <input name="gamename" type="text" value={formInput?.gamename} onWheel={(e) => e.target.blur()} onChange={handleInput} placeholder="Enter Game Name " className="form-control"/><br/>
                  <input name="open_time" type="time" step={900} value={formInput?.open_time} onWheel={(e) => e.target.blur()} onChange={handleInput} placeholder="open time " className="form-control"/><br/>
                  <input name="close_time" type="time" step={900} value={formInput?.close_time} onWheel={(e) => e.target.blur()} onChange={handleInput} placeholder="close time " className="form-control"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e)=>{
                      e.preventDefault()
                      handleAddGame()
                    }}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>





            <Modal show={edit} onHide={()=>setEdit(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Game Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input name="game" type="text" onWheel={(e) => e.target.blur()} placeholder="Enter Game Name " className="form-control" onChange={(e)=>{
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
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

    </div>
  )
}

export default GameName
