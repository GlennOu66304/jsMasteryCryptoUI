import PropTypes from 'prop-types';
const Button = ({color,text, onClick}) => {
    return (
    <div>
      <button className='btn' onClick = {onClick} style={{backgroundColor:color} } >{text}</button>    

    </div>
    )
}
Button.defaultProps ={
    color:'steelblue',
    
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text:  PropTypes.string.isRequired
}
export default Button
