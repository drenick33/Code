import { Router } from 'express';
import boardCreate from '../controllers/boards/boardCreate';
import boardGet from '../controllers/boards/boardGet';
import boardDelete from '../controllers/boards/boardDelete';
import boardGetOne from '../controllers/boards/boardGetOne';
import boardPatch from '../controllers/boards/boardPatch';

const router = Router();

router.post('/', boardCreate);
router.get('/', boardGet);
//change to boardId
router.delete('/:BoardID', boardDelete);
router.get('/:BoardID', boardGetOne);
router.patch('/:BoardID', boardPatch);

module.exports = router;
