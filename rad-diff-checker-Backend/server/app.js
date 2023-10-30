const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080; // Choose a port for your backend

app.use(cors());
app.use(express.json());

// Hardcoded template text for demonstration
const templateData = {
  1: `EXAM:
CT Left Ankle, without IV contrast

CLINICAL HISTORY:
Left ankle injury.

TECHNIQUE:
Axial images were acquired through the left ankle without IV contrast.
Reformatted images were reviewed.
Dose reduction technique was used including one or more of the following:
automated exposure control, adjustment of mA and kV according to patient size,
and/or iterative reconstruction.

COMPARISON:
None provided.

FINDINGS:

BONES:
There is an acute obliquely oriented fracture of the lateral malleolus with minimal lateral displacement.

JOINTS:
No dislocation. There is a small ankle joint effusion. 

SOFT TISSUES:
Lateral malleolar soft tissue swelling is present. 

IMPRESSION:

1. Acute obliquely oriented fracture of the lateral malleolus as described above. 
`,

};

app.get('/api/template/:template_id', (req, res) => {
  const { template_id } = req.params;
  const templateText = templateData[template_id];
  if (templateText) {
    res.json({ template_text: templateText });
  } else {
    res.status(404).json({ error: 'Template not found' });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});