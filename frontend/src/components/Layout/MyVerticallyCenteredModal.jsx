import React from "react";
import { Button, Modal, ModalDialog } from "react-bootstrap";
import { BiXCircle } from "react-icons/bi";

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="absolute top-0 left-0 z-[999px] w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.46)]"
      contentClassName="flex item-center justify-center w-[100vw] h-[100vh]"
    >
      <ModalDialog
        className=" flex items-center justify-center"
        contentClassName="min-h-[140px] bg-white rounded-md px-2 py-3 w-[600px]"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="py-3 flex items-center justify-between gap-8 w-full border-b-[1.3px] border-b-indigo-500"
          >
            <h3 className="text-[24px] text-indigo-600 leading-3">
              {props.heading}
            </h3>
            <Button onClick={props.onHide}>
              <BiXCircle className="text-indigo-500 text-[24px]" />
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </ModalDialog>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
