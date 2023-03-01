/**
 * Express Routes Tutorial
 */

// Инициализаруем в приложение express и создадим простой API с помощью Express
const express = require("express");
const app = express();
const PORT = 6969;


/**
 * (ч. 2) После того, как разделили роуты по файлам и сообщим
 * нашему приложению, про наши роуты, чтобы у нас был доступ к ним из нашего приложения.
 * Но в самих этих файлах (User.js, Comments.js) не забываем прописать экспорты:
 * module.exports = router;
 */
const userRoute = require("./routes/User");
const commentsRoute = require("./routes/Comments");
// (ч. 2) А теперь должны добавим эти роуты в наше приложение:
app.use("/user", userRoute);
app.use("/comments", commentsRoute);
/**
 * (ч. 2) После того, как мы здесь добавили в приложение наше роуты
 * и указали путь, можем в наших файлах удалить эти пути и оставить "/"
 */


/**
 * Создадим роуты с запросами: get, post, put, delete.
 * Эндпоинт у нас будет один - "/users"
 */

// Создаем get запрос. Напимер, подключение к БД.
// Удаляем теперь эти роуты из этого файла.
// app.get("/users", (req, res) => {
//     // Тут, например, создаем подключение к БД и получаем данные, записываем их в переменную.
//     // ...
//     // А далее эти данные мы отправляем обратно
//     res.send({ data: "Here is your data" });
// });

// app.post("/users", (req, res) => {
//     res.send({ data: "User Created" });
// });

// app.put("/users", (req, res) => {
//     res.send({ data: "User Updated" });
// });

// app.delete("/users", (req, res) => {
//     res.send({ data: "User deleted :(" });
// });

/**
 * 
 * (сначала прописал все роуты в index.js, после разделил по файлам)
 * Организуем наши роуты, чтобы не было миллион строк кода с роутами в одном файле.
 * Для этого создаем в нашем каталоге папку routes и создадим для каждой секции (users, comments) отдельные файлы с роутами.
 * А от сюда удалим. Но я просто закомментирую, чтобы можно было отслеживать последовательность действий.
 * 
 */

// Удаляем теперь эти роуты из этого файла.
// app.get("/comments", (req, res) => {
//     res.send({ data: "Here is your data" });
// });

// app.post("/comments", (req, res) => {
//     res.send({ data: "User Created" });
// });

// app.put("/comments", (req, res) => {
//     res.send({ data: "User Updated" });
// });

// app.delete("/comments", (req, res) => {
//     res.send({ data: "User deleted :(" });
// });


// Запускаем приложение.
app.listen(PORT, () => {
    console.log(`Server running on ${PORT} port`);
})





/**
 * (ч. 3) Так работают роуты в express.js
 */