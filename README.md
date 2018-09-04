# Best Practices for a NodeJS Project

# DataBase Setup

```
create database sampleblogdb;
create user samplebloguser identified by 'sampleblogpass';
grant all privileges on sampleblogdb.* to samplebloguser;
flush privileges;
```