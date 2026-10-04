import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((str, i) => (
        <span
          key={`${str}-${i}`}
          className={`${letterClass} _${i + idx}${str === ' ' ? ' letter-space' : ''}`}
        >
          {str}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
