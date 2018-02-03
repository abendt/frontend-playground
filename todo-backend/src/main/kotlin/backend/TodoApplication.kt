package backend

import com.fasterxml.jackson.databind.SerializationFeature
import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.CallLogging
import io.ktor.features.ContentNegotiation
import io.ktor.features.DefaultHeaders
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.jackson.jackson
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.routing
import org.slf4j.event.Level

data class CreateTodoRequest(val todo: String)

fun Application.configureBackend(todoService: TodoService) {

    install(DefaultHeaders)
    // install(Compression)
    install(CallLogging) {
        level = Level.INFO
    }
    install(ContentNegotiation) {
        jackson {
            configure(SerializationFeature.INDENT_OUTPUT, true)
            // registerModule(JavaTimeModule())
        }
    }
    routing {
        get("/") {
            call.respondText("Hello, world!", ContentType.Text.Html)
        }

        post("/todos") {
            val request: CreateTodoRequest = call.receive()

            val todo = todoService.createTodo(request.todo)

            call.respond(HttpStatusCode.Created, todo)
        }

        get("/todos") {
            call.respond(HttpStatusCode.OK, todoService.findAllTodos())
        }

        post("/todos/{todo}") {
            val todoId = call.parameters["todo"]!!

            todoService.toggleTodo(todoId, true)

            call.respond(HttpStatusCode.Accepted)
        }
    }
}