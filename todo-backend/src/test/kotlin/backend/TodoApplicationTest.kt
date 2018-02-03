package backend

import com.natpryce.hamkrest.assertion.assert
import com.natpryce.hamkrest.equalTo
import com.nhaarman.mockito_kotlin.*
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.server.testing.handleRequest
import io.ktor.server.testing.withTestApplication
import org.junit.Test

class TodoApplicationTest {

    val todoServiceMock = mock<TodoService> {
        on { createTodo(any()) } doReturn Todo("uuid", "todo", false)
    }

    @Test
    fun getAll() {
        withTestApplication({ configureBackend(todoServiceMock) }) {
            with(handleRequest(HttpMethod.Get, "/todos", {
                addHeader("Accept", "application/json")
            })) {
                assert.that(response.status(), equalTo(HttpStatusCode.OK))

                verify(todoServiceMock).findAllTodos()
            }
        }
    }

    @Test
    fun postCreate() {
        withTestApplication({ configureBackend(todoServiceMock) }) {
            with(handleRequest(HttpMethod.Post, "/todos", {
                addHeader("Accept", "application/json")
                addHeader("Content-Type", "application/json")
                body = """{"todo": "myTodo"}"""
            })) {
                assert.that(response.status(), equalTo(HttpStatusCode.Created))

                verify(todoServiceMock).createTodo("myTodo")
            }
        }
    }

    @Test
    fun postToggle() {
        withTestApplication({ configureBackend(todoServiceMock) }) {
            with(handleRequest(HttpMethod.Post, "/todos/myId", {
                addHeader("Accept", "application/json")
            })) {
                assert.that(response.status(), equalTo(HttpStatusCode.Accepted))

                verify(todoServiceMock).toggleTodo("myId", true)
            }
        }
    }

}