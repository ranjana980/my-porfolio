import { Alert,Snackbar } from "@mui/material";

export default function AlertComponent({ isOpen, message,setIsOpenAlert }) {
  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={()=>setIsOpenAlert(!isOpen)}>
      <Alert
        onClose={()=>setIsOpenAlert(!isOpen)}
        severity={message.type}
        sx={{ width: "100%" }}
      >
        {message.message}
      </Alert>
    </Snackbar>
  );
}
