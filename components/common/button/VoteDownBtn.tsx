import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownIcon } from './../../icons'

const VoteDownBtn = () => {
  return (
    <>
      <motion.div className='voteButtons' whileHover={{
        cursor: 'pointer',
        y:+2
      }}>
        <ArrowDownIcon width={25} height={25} color='#60a5fa' isVoted={false} />
      </motion.div>
    </>
  )
}

export default VoteDownBtn