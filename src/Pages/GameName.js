import React, { useEffect, useState } from 'react'
import { Loader } from '../Common/Loader'
import { gameNameApi } from '../service/service';
import DataTable, { createTheme } from 'react-data-table-component';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const GameName = () => {
  const [data, setData] = useState([])
  const[loader,setLoader]=useState(false)
  const[show,setShow]=useState(false)
  const handleClose =()=>{
    setShow(false)
  }
  useEffect(() => {
    handleGameNameList()
  }, [])

  const handleGameNameList = () => {
    setLoader(true)
    gameNameApi("NORMAL").then((res) => {
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
            {index+1}
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
          <span className={row?.market_status ? "btnspan success" : "btnspan danger"}>
            {row?.market_status ? "Yes" : "No"}
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
            <button className='btn btn-primary m-1 btn-sm'>
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


  return (
    <div className="content-wrapper">
      {loader?<Loader/>:null}

      <div className="container-fluid">
        <div className="card mb-3">
          <div className="card-header">
            <i className="fa fa-table"></i> <b>Fund Request Auto Deposit History</b>
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
                  <input name="game-name" type="text" onWheel={(e) => e.target.blur()} placeholder="Enter Game Name " className="form-control"/><br/>
                  <input name="time" type="time" onWheel={(e) => e.target.blur()} placeholder="open time " className="form-control"/><br/>
                  <input name="time" type="time" onWheel={(e) => e.target.blur()} placeholder="close time " className="form-control"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

    </div>
  )
}

export default GameName
