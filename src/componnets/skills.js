import { LinearProgress } from "@mui/material";
export default function Skills({ skill, percent }) {
  return (
    <div>
      <div
        className="flex gap-5 justify-between"
      >
        <h6>{skill}</h6>
        <h6>{percent}%</h6>
      </div>
      <LinearProgress variant="determinate"  sx={{height:'8px',borderRadius:'10px',marginTop:'5px'}} color="primary" value={percent} />
    </div>
  );
}
