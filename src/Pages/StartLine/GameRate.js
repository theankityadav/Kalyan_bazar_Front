import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
const GameRate = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class="content-wrapper">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-lg-8 mr-auto ml-auto">
                            <div class="row">
                                <div class="col-sm-12 col-12 ">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Add Games Rate</h4>
                                            <form class="theme-form mega-form" id="gameRatesFrm" name="gameRatesFrm" method="post">
                                                <input type="hidden" name="game_rate_id" value="1" />
                                                <div class="row">
                                                    <div class="form-group col-md-6">
                                                        <label class="col-form-label">Single Digit Value 1</label>
                                                        <input class="form-control" type="number" name="single_digit_1" id="single_digit_1" value="10" placeholder="Enter Single Digit Value" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label class="col-form-label">Single Digit Value 2</label>
                                                        <input class="form-control" type="number" name="single_digit_2" id="single_digit_2" value="95" placeholder="Enter Single Digit Value" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label class="col-form-label">Single Pana Value 1</label>
                                                        <input class="form-control" type="number" name="double_pana_1" id="double_pana_1" value="10" placeholder="Enter Double Pana Value" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label class="col-form-label">Single Pana Value 2</label>
                                                        <input class="form-control" type="number" name="double_pana_2" id="double_pana_2" value="2800" placeholder="Enter Double Pana Value" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label class="col-form-label">Double Pana Value 1</label>
                                                        <input class="form-control" type="number" name="jodi_digit_1" id="jodi_digit_1" value="10" placeholder="Enter Jodi Digit Value" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label class="col-form-label">Double Pana Value 2</label>
                                                        <input class="form-control" type="number" name="jodi_digit_2" id="jodi_digit_2" value="950" placeholder="Enter Jodi Digit Value" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label class="col-form-label">Tripple Pana Value 1</label>
                                                        <input class="form-control" type="number" name="single_pana_1" id="single_pana_1" value="10" placeholder="Enter Tripple Pana Value" />
                                                    </div>
                                                    <div class="form-group col-md-6">
                                                        <label class="col-form-label">Tripple Pana Value 2</label>
                                                        <input class="form-control" type="number" name="single_pana_2" id="single_pana_2" value="1400" placeholder="Enter Tripple Pana Value" />
                                                    </div>


                                                </div>
                                                <div class="form-group">
                                                    <button type="button" class="btn btn-primary waves-light m-t-10" id="submitBtn" name="buysubmitBtn" onClick={()=>{
                                                        handleShow()
                                                    }}>Submit</button>
                                                </div>
                                                <div class="form-group">
                                                    <div id="error"></div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default GameRate