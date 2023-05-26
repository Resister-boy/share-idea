import React from 'react';
import { ArrowUpIcon } from './../../icons';
import { motion } from 'framer-motion';

const VoteUpBtn = () => {
  return (
    <>
      <motion.div className='voteButtons' whileHover={{
        cursor: 'pointer',
        y:-2
      }}>
        <ArrowUpIcon width={25} height={25} color='#f87171' isVoted={false} />
      </motion.div>
    </>
  )
}

export default VoteUpBtn