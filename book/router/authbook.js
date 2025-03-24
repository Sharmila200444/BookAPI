const express=require('express');

const router=express.Router();

const { getbook }=require('../controller/b_operation');
const {getsinglebook}=require('../controller/b_operation')
const {createbook,updatebook,deletebook}=require('../controller/b_operation');

router.route('/gbook').get(getbook);
router.route('/sbook/:id').get(getsinglebook);
router.route('/cbook').post(createbook);
router.route('/ubook/:id').put(updatebook);
router.route('/dbook/:id').delete(deletebook);

module.exports=router;