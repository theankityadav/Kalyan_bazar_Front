import React, { useEffect, useState } from 'react'
import { getuserList } from '../service/service'
import DataTable, { createTheme } from 'react-data-table-component';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../Common/Loader';

const Userlist = () => {

  const navigate = useNavigate()
  const [list, setList] = useState([])
  useEffect(() => {
    getInformation()
  }, [])


  const getInformation = () => {
    getuserList().then((res) => {
      setList(res.data.data)
    }).catch((err) => {
      alert(err || "something went wrong ")
    })
  }

  const columns = [
    {
      name: '#',
      cell: (row, index) => {
        return (
          <p >
            {row?.id}
          </p>
        )
      },

      sortable: true,

    },
   
    {
      name: 'Name',

      cell: (row, index) => {


        return (
          <span className='link' onClick={() => navigate("/user-details",
            { state: row }
          )}>
           {row?.first_name + " " + row?.last_name}
          </span>
        )
      }
    },
    {
      name: 'Phone Number',
      selector: row => row.phone_number,
      width: "10%",
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      width: "10%",
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => moment(row?.created_at).format("DD-MM-YYYY"),
      width: "11%",
      sortable: true,
    },
    {
      name: 'Action',

      cell: (row, index) => {


        return (
          <span className={row?.user_status ? "btnspan success" : "btnspan danger"}>
            {row?.user_status ? "Yes" : "No"}
          </span>
        )
      }
    },
    {
      name: 'Betting',

      cell: (row, index) => {


        return (
          <span className={row?.betting ? "btnspan success" : "btnspan danger"}>
            {row?.betting ? "Yes" : "No"}
          </span>
        )
      }
    },
    {
      name: 'Action',

      cell: (row, index) => {


        return (
          <i className="fa fa-eye primary" onClick={() => navigate("/user-details",
            { state: row }
          )}></i>
        )
      }
    },

  ];
  createTheme('dark', {
    background: {
      default: 'transparent',
    },
  });


  return (
    <div>

      <div className="content-wrapper">
        {/* <Table list={list} head="User List" /> */}
        {list.length > 0 ?
          <DataTable
            columns={columns}
            data={list}
            pagination
            sortable
          />

          : <div className='nosimilar_torrent text-gray-700 '>
            <Loader />  
            </div>
        }
      </div>
    </div>
  )
}

export default Userlist
