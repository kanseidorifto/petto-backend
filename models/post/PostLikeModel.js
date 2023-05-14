import mongoose from 'mongoose';

const PostLikeSchema = mongoose.Schema(
	{
		post: { type: mongoose.Schema.Types.ObjectId, ref: 'UserPost', required: true },
		profile: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile', required: true },
	},
	{ timestamps: true },
);

export default mongoose.model('PostLike', PostLikeSchema);