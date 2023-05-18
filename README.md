# Easy Attendance - Streamline Your Attendance Management

## Contents

-   [Description](#description)
-   [Installation](#installation)

---

## Description

Easy Attendance is a simple but effective web-based application designed to help an organization manage their attendance easily. This user-friendly application offers an efficient and reliable solution to accurately track attendance and generate basic reports.

---

## Installation

1. Open your terminal or command prompt
2. Clone the project

```bash
$ git clone https://github.com/BudiSetyo/test-express-absensi.git
```

3. Move inside the directory and install the required dependencies

```bash
$ yarn install
```

4. Set the .env file like the example file .env.example
5. Import absensi.sql file to your database MySQL or other
6. Import Absensi API.postman_collection.json file to your postman
7. Install knex as global and run migrate latest

```bash
$ yarn add global knex
$ knex migrate:latest
```

8. To run the app

```bash
$ yarn dev
```

9. If the nodemon not work please install nodemon as global and re run the app

```bash
$ yarn global add nodemon
```
