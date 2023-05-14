import mongoose from 'mongoose';

const PostTaggedPetSchema = mongoose.Schema(
	{
		post: { type: mongoose.Schema.Types.ObjectId, ref: 'UserPost', required: true },
		petProfile: { type: mongoose.Schema.Types.ObjectId, ref: 'PetProfile', required: true },
	},
	{ timestamps: true },
);

export default mongoose.model('PostTaggedPet', PostTaggedPetSchema);
