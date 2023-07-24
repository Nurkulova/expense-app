import React from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const ConfirmModal = ({ onConfirm, onCancel }) => {
  return (
    <Modal>
        <p>Вы точно хотите выйти?</p>
        <ButtonWrapper>
          <button onClick={onConfirm}>ДА</button>
          <button onClick={onCancel}>Нет</button>
        </ButtonWrapper>
    </Modal>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  gap:1rem;
`;

export default ConfirmModal;
