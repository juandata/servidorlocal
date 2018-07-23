import { connect } from 'react-redux'
import { changeView } from '../redux/actions'
import Register from '../atoms/Register'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
/*
const mapStateToProps = (state) => ({

  })
*/
function mapStateToProps(state){
  return {
    view : state.view
  }
}
const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)

export default RegisterUser
