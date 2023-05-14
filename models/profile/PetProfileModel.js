import mongoose from 'mongoose';

const PetProfileSchema = mongoose.Schema(
	{
		owner: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile', required: true },
		surname: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		avatarUrl: { type: String, required: true },
		breed: { type: String, required: true },
		age: { type: Number, required: true },
		bio: String,
	},
	{ timestamps: true },
);

export default mongoose.model('PetProfile', PetProfileSchema);
