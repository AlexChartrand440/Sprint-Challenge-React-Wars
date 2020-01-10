import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CharacterModal = (props) => {
  const {
    data,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{data.name}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{data.name}</ModalHeader>
        <ModalBody>
            <p>Gender: {data.gender}</p>
            <p>Birth Year: {data.birth_year}</p>
            <p>Height: {data.height}</p>
            <p>Eye Color: {data.eye_color}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Weight: {data.mass}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CharacterModal;