const express = require("express");
/**
 * Добавим функцию экспресса - Router, которая будет говорить,
 * что этот файл – Router object.
 * Теперь вместо app. укажем router
 */
const router = express.Router();

/**
 * Было:
 * app.get("/users", (req, res) => {
 *   res.send({ data: "Here is your data" });
 * });
 * Стало:
 * router.get("/users", (req, res) => {
 *   res.send({ data: "Here is your data" });
 * });
 */

/**
 * Когда добавим в наше приложение все роуты (в index.js добавим User.js и Comments.js),
 * в файлах роута оставляем путь в виде "/", т.к. точный путь мы указываем в index.js (в нашем приложении):
 * Было: router.get("/user", (req, res) => { | Стало: router.get("/", (req, res) => {
 */
router.get("/", (req, res) => {
    res.send({ data: "Here is your data user" });
});

router.post("/", (req, res) => {
    res.send({ data: "User Created" });
});

router.put("/", (req, res) => {
    res.send({ data: "User Updated" });
});

router.delete("/", (req, res) => {
    res.send({ data: "User deleted :(" });
});

module.exports = router;