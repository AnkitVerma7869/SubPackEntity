import React from 'react';
interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    tableName: string;
}
declare const ConfirmModal: React.FC<ConfirmModalProps>;
export default ConfirmModal;
