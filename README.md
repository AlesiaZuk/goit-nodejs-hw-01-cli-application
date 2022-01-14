# goit-nodejs-hw-01-cli-application

---

- **Получаем и выводим весь список контактов в виде таблицы (console.table)**

```
node index.js --action list
```

![list](./image/1.jpg)

- **Получаем контакт по id**

```
node index.js --action get --id 5
```

![get](./image/2.jpg)

- **Добавялем контакт**

```
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
```

![add](./image/3.jpg)

- **Удаляем контакт**

```
node index.js --action remove --id=3
```

![remove](./image/4.jpg)
