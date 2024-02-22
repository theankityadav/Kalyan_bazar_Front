/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const SecondRightCard = () => {
  return (
    <>
        <div className='row mb-3'>
            <div className="col-xl-12 col-sm-12 mb-3">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Total Bids On Single Ank Of Date 22 Jul 2023</h5>
						<div className='row align-items-end'>
                            <div className='col-xl-5 col-sm-6 mb-3'>
                                <p className="card-text">Game Name</p>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>-- Select Game name --</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className='col-xl-5 col-sm-6 mb-3'>
                                <p className="card-text">Game Time</p>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>-- Select Market Time --</option>
                                    <option value="1">Open Market</option>
                                    <option value="2">Close Market</option>
                                </select>
                            </div>
                            <div className='col-xl-2 col-sm-6 mb-3'>
                                <button href="#" className="btn btn-warning">Get</button>
                            </div>
                        </div>
					</div>
				</div>
			</div>
        </div>
    </>
  )
}

export default SecondRightCard