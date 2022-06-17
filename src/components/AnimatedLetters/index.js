import './index.scss';

const AnimatedLetters = ({letterClass, strArray, idx}) => {

    return (
        <span>
        {
            strArray.map((str, i) => (
                <span key={str + i} className={`${letterClass} _${i + idx}`}>{str}</span>
            )
            )
        }
        </span>
        )
};

export default AnimatedLetters;