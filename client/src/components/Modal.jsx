import { Modal, Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300',
  bgcolor: 'background.paper',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

const ModalContact = ({ children, open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Stack sx={style} direction="column" spacing={2} p={2} mt={2}>
        {children}
      </Stack>
    </Modal>
  );
};

export default ModalContact;
