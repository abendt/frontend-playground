import com.bmuschko.gradle.docker.tasks.container.DockerCreateContainer
import com.bmuschko.gradle.docker.tasks.container.DockerStartContainer
import com.bmuschko.gradle.docker.tasks.container.DockerStopContainer
import org.gradle.api.tasks.testing.logging.TestExceptionFormat
import org.jetbrains.kotlin.gradle.dsl.Coroutines
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

buildscript {
    repositories {
        jcenter()
    }

    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.2.21")
        classpath("com.bmuschko:gradle-docker-plugin:3.2.3")
    }
}

plugins {
    application
    kotlin("jvm") version "1.2.21"
    id("com.bmuschko.docker-java-application") version "3.2.3"
    id("com.bmuschko.docker-remote-api") version "3.2.3"
}

repositories {
    jcenter()

    maven {
        setUrl("http://dl.bintray.com/kotlin/ktor")
    }

    maven {
        setUrl("https://dl.bintray.com/kotlin/kotlinx")
    }
}

application {
    mainClassName = "backend.NettyServerKt"
}

docker {
    javaApplication {
        baseImage = "anapsix/alpine-java:8_server-jre"
        setPorts(setOf(8080))
    }
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
}

fun ktor(artifactId: String): String {
    val ktorVersion = "0.9.1"

    return "io.ktor:$artifactId:$ktorVersion"
}

dependencies {

    compile(kotlin("stdlib-jdk8"))

    compile(ktor("ktor-server-core"))
    compile(ktor("ktor-server-netty"))
    compile(ktor("ktor-jackson"))
    testCompile(ktor("ktor-server-test-host")) {
        exclude("ch.qos.logback", "logback-classic")
    }

    compile("com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.9.4")

    compile("io.github.microutils:kotlin-logging:1.5.3")

    runtime("ch.qos.logback:logback-classic:1.2.3")
    runtime("org.slf4j:log4j-over-slf4j:1.7.25")

    testCompile("io.rest-assured:rest-assured:3.0.6")

    testCompile("junit:junit:4.12")
    testCompile("com.natpryce:hamkrest:1.4.2.2")
    testCompile("com.nhaarman:mockito-kotlin-kt1.1:1.5.0")

    testRuntime(kotlin("reflect"))
}

configurations {
    get("compile").exclude(module = "slf4j-log4j12").exclude(module = "log4j")
    get("testCompile").exclude(module = "slf4j-log4j12").exclude(module = "log4j")
}

kotlin {
    experimental.coroutines = Coroutines.ENABLE
}

tasks {

    "test"(Test::class) {
        include("**/*Test.class")
    }

    val testContainerName = "frontend-playground-container"

    createTask("dockerRemove", Exec::class) {
        group = "docker"
        executable = "docker"
        args = listOf("rm", "-f", testContainerName)
        isIgnoreExitValue = true
    }

    val dockerCreate = createTask("dockerCreate", DockerCreateContainer::class) {
        dependsOn("dockerBuildImage", "dockerRemove")
        targetImageId { "frontend-playground/todo-backend" }
        portBindings = listOf("8080:8080")
        containerName = testContainerName
    }

    createTask("dockerStart", DockerStartContainer::class) {
        dependsOn("dockerCreate")

        targetContainerId { dockerCreate.containerId }
    }

    createTask("dockerStop", DockerStopContainer::class) {
        targetContainerId { dockerCreate.containerId }
    }

    createTask("it", Test::class) {
        dependsOn("test", "dockerStart")
        finalizedBy("dockerStop")

        include("**/*IT.class")
    }
}

tasks.withType(Test::class.java) {
    testLogging {
        exceptionFormat = TestExceptionFormat.FULL
        showStandardStreams = true
    }
}

tasks.withType(KotlinCompile::class.java) {
    kotlinOptions {
        jvmTarget = "1.8"
    }
}
