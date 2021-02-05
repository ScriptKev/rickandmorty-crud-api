import { Router } from 'express'
import { getCharacters, createCharacter, updateCharacter, deleteCharacter, getCharacter } from './controllers'
const router = Router()

router.get('/characters', getCharacters)
router.post('/characters', createCharacter)
router.get('/characters/:id', getCharacter)
router.put('/characters/:id', updateCharacter)
router.delete('/characters/:id', deleteCharacter)

export default router
