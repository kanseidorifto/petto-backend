import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import fs from 'fs';
import multer from 'multer';
import cors from 'cors';

// configuration

const PORT = process.env.NODE_PORT || 1337;

const app = express();

const storage = multer.diskStorage({
	destination: (_, __, cb) => {
		if (!fs.existsSync('uploads')) {
			fs.mkdirSync('uploads');
		}
		cb(null, 'uploads');
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });

//
mongoose.set('strictQuery', true);
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log('DB OK!'))
	.catch((err) => console.error('DB Error!', err));

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));


// endpoints





// run
app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}

	console.log(`Server OK on ${PORT} port!`);
});