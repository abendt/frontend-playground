import com.moowork.gradle.node.yarn.YarnTask

plugins {
    id("com.moowork.node") version "1.2.0"
}

tasks {
    createTask("test", YarnTask::class) {
        dependsOn("yarn")
        args = listOf("test")
        setEnvironment(mapOf("CI" to "true"))
    }
}