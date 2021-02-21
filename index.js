import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import authRoutes from './routes/auth.js'

const app = express()
app.use(cors())


app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    res.send('Hello from VietsIdol API')
})

const PORT = process.env.PORT || 8000

mongoose.connect('mongodb+srv://admin:admin@vietidols.hwq7l.mongodb.net/vietidols?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)