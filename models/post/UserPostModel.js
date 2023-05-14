import mongoose from 'mongoose';

const UserPostSchema = mongoose.Schema(
	{
		profile: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile', required: true },
		writtenText: { type: String, required: true },
		mediaLocations: { type: Array, default: [] },
		viewsCount: { type: Number, default: 0 },
	},
	{ timestamps: true },
);

export default mongoose.model('UserPost', UserPostSchema);
