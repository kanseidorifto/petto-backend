import mongoose from 'mongoose';

const UserFriendshipSchema = mongoose.Schema(
	{
		profileRequest: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile', required: true },
		profileAccept: { type: mongoose.Schema.Types.ObjectId, ref: 'UserProfile', required: true },
		status: { type: Number, default: 0 },
	},
	{ timestamps: true },
);

export default mongoose.model('UserFriendship', UserFriendshipSchema);
