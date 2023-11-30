import React from 'react'

const Resultdeclare = () => {
  return (
    <>
     <div className="content-wrapper">
        <div className='container-fluid'>
            <div className='card p-3 flex align-center space-between mb-3'>
                <h4 class="card-title text-left w-100">Select Game</h4>
                <div className='row w-100'>
                    <div className='form-group col-md-3'>
                        <input type="date" id="start" className='form-control' />
                    </div>
                    <div className='form-group col-md-4'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Game Name</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='form-group col-md-3'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Session</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='form-group col-md-2'>
                        <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn">Go</button>
                    </div>
                </div>
            </div>
            <div className='card p-3 flex align-center space-between'>
                <h4 class="card-title text-left w-100">Declare Result</h4>
                <div className='row w-100'>
                    <div className='form-group col-md-4'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Panna</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='form-group col-md-3'>
                        <input type="text" id="start" className='form-control' placeholder='Digit' />
                    </div>
                    <div className='form-group col-md-2'>
                        <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn">Save</button>
                    </div>
                    <div className='form-group col-md-2'>
                        <button type="submit" class="btn btn-primary btn-block" id="srchBtn" name="srchBtn">Declare</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Resultdeclare