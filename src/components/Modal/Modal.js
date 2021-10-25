import React from 'react';

const Modal = (props) => {

    const title = props.hasOwnProperty('title') ? props.title : null;
    const image = props.hasOwnProperty('image') ? props.image : null;
    const msg = props.hasOwnProperty('msg') ? props.msg : null;

    const phoneNumber = props.hasOwnProperty('phoneNumber') ? props.phoneNumber : null;
    const greetingsMsg = props.hasOwnProperty('greetingsMsg') ? props.greetingsMsg : null;

    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{title} {greetingsMsg}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>{msg}</p>
                        <img src={image} alt="" />
                        <p>{phoneNumber}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div >
    )

};

export default Modal;