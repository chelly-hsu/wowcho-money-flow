import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config({ path: './env/config.env' })

const DB = `mongodb+srv://wowcho:1qaz%40WSX@cluster0.fdnrq87.mongodb.net/test`

// const DB = process.env.DATABASE_URL?.replace('${DATABASE_ACCOUNT}', process.env.DATABASE_ACCOUNT || '')
// .replace('${DATABASE_PASSWORD}', process.env.DATABASE_PASSWORD || '') 
// || ''


mongoose.connect(DB)
  .then(() => console.log('Server 連線成功'))
  .catch(e => console.log(e))