import mongoose from 'mongoose'

interface Wrestler extends mongoose.Document {
    firstName: string;
    lastName: string;
    team: string;
}

const WrestlerSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    team: {type: String, required: true},
})

const WrestlerModel = mongoose.model<Wrestler>('Wrestler', WrestlerSchema)

export { WrestlerModel };
export type { Wrestler };
