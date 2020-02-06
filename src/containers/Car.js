import { connect } from 'react-redux'
import Car from '../components/Car'


const mapStateToProps = (state) => {

    return {
        user: state.username,
        cars: state.cars,
    }

}

export default connect (mapStateToProps)(Car)