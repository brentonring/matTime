import mongoose from 'mongoose'

interface Wrestler {
    _id?: string;
    firstName: string;
    lastName: string;
    team: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const WrestlerSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    team: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

const WrestlerModel = mongoose.model<Wrestler>('Wrestler', WrestlerSchema)

export { WrestlerModel };
export type { Wrestler };
