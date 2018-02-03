package backend

import io.restassured.RestAssured
import io.restassured.http.ContentType
import org.hamcrest.Matchers.hasItem
import org.junit.Before
import org.junit.Test
import java.util.*

class TodoBackendIT {

    @Before
    fun setUp() {
        RestAssured.enableLoggingOfRequestAndResponseIfValidationFails()
        RestAssured.port = 8080
        RestAssured.baseURI = "http://localhost"
    }

    @Test
    fun canAddTodo() {
        val todo = UUID.randomUUID().toString()

        val requestSpecification = RestAssured.given()
                .contentType(ContentType.JSON)
                .accept(ContentType.JSON)

        requestSpecification
                .body("""{"todo": "$todo"}""")
                .`when`()
                .post("/todos")
                .then().statusCode(201)

        requestSpecification.`when`().get("/todos").then().body("todo", hasItem(todo))
    }
}