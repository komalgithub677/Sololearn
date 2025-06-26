// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import multer from 'multer'; // ✅ added
// import bodyParser from 'body-parser';

// // Connect to MongoDB Atlas
// mongoose.connect('mongodb+srv://pavansonawane:Pavan1925@cluster0.c5ztmsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB error:', err));

// const app = express();
// app.use(cors());
// app.use(bodyParser.json({ limit: '10mb' }));

// // Use multer for file uploads (memory storage to buffer)
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // Schema
// const ImageSchema = new mongoose.Schema({
//   image: Buffer,
//   contentType: String,
//   createdAt: { type: Date, default: Date.now }
// });

// const ImageModel = mongoose.model('Image', ImageSchema);

// // ✅ Upload API route using FormData and Blob
// app.post('/api/upload', upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image file uploaded' });

//     const newImage = new ImageModel({
//       image: req.file.buffer,
//       contentType: req.file.mimetype,
//     });

//     await newImage.save();

//     res.json({ message: 'Image uploaded successfully', id: newImage._id });
//   } catch (err) {
//     console.error('Upload error:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // ✅ Stream image by ID (unchanged)
// app.get('/view-image/:id', async (req, res) => {
//   try {
//     const imageDoc = await ImageModel.findById(req.params.id);
//     if (!imageDoc) return res.status(404).send('Image not found');

//     res.set('Content-Type', imageDoc.contentType);
//     res.send(imageDoc.image);
//   } catch (err) {
//     console.error('Image view error:', err);
//     res.status(500).send('Server error');
//   }
// });

// app.listen(5000, () => console.log('Server running on http://localhost:5000'));
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

import videoRoutes from "./src/routes/videoRoutes.js";
import locationRoutes from "./src/routes/locationRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/videos", videoRoutes);
app.use("/api/location", locationRoutes);

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
  });
