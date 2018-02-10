package backend

import org.junit.Test
import com.natpryce.hamkrest.assertion.assert
import com.natpryce.hamkrest.equalTo
import com.natpryce.hamkrest.hasSize
import com.natpryce.hamkrest.isEmpty

class TodoServiceTest {

    val serviceUnderTest = TodoService()

    @Test
    fun allTodosIsEmptyByDefault() {
        assert.that(serviceUnderTest.findAllTodos(), isEmpty)
    }

    @Test
    fun canAddTodo() {
        serviceUnderTest.createTodo("my todo")

        assert.that(serviceUnderTest.findAllTodos(), hasSize(equalTo(1)))
    }

    @Test
    fun newTodoIsNotDone() {
        val todo = serviceUnderTest.createTodo("my todo")

        assert.that(todo.first().done, equalTo(false))
    }

    @Test
    fun canToggleTodo() {
        val todo = serviceUnderTest.createTodo("my todo").first()

        serviceUnderTest.toggleTodo(todo.uuid, true)

        assert.that(serviceUnderTest.findAllTodos().first().done, equalTo(true))
    }
}