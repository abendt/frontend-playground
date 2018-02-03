package backend

import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty

fun main(args: Array<String>) {
    val todoService = TodoService()

    embeddedServer(Netty, 8080) {
        configureBackend(todoService)
    }.start(wait = true)
}