import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { PropsWithChildren, ReactNode } from 'react'

export const ScrollAnimation = ({ children }: PropsWithChildren) => {
  return (
    <StyledContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={containerVariants}
    >
      {children}
    </StyledContainer>
  )
}

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const StyledContainer = styled(motion.div)`
  width: 100%;
  display: flex;
`
