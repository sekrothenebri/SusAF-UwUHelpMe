import mongoose from 'mongoose'

const pointBalSchema = new mongoose.Schema(
	{
		normal: { type: String,  required: true },
		omega: { type: String, required: false },
		userid: { type: String, required: true }
	},
	{ collection: 'pointBal' }
)

pointBalSchema.index({ normal: 1, userid: 1 }, { unique: true })

const model = mongoose.model('Points', pointBalSchema)
export default model