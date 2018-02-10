package backend

import mu.KLogging
import java.util.*

data class Todo(val uuid: String, val todo: String, var done: Boolean)

open class TodoService {

    companion object : KLogging()

    val todos = mutableListOf<Todo>()

    open fun createTodo(todo: String): List<Todo> {
        val newTodo = Todo(UUID.randomUUID().toString(), todo, false)
        todos.add(newTodo)

        logger.info { "created new todo: $newTodo" }

        return todos
    }

    open fun findAllTodos(): List<Todo> = todos

    open fun toggleTodo(uuid: String, done: Boolean): Boolean {
        return todos.find { it.uuid == uuid }?.let {
            it.done = done
            logger.info { "toggled todo $it" }

            true
        } ?: false
    }
}