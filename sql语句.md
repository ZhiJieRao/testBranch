###select
>select 列名称 from 表名称
- 不同的列可以用逗号隔开
select user,pwd from users
- *代表所有列
select * from users

###insert into
>向数据表中插入新的数据行
- 表示向users表的user,pwd列插入对应的值,多个列和多个值之间用逗号间隔
insert into users(user,pwd) values ('root','admin123')

###update
>表示修改表中的数据
* 用update表示要修改的表
* set表示要修改的列
* where指定更新的条件
* 多个被更新列之间用英文逗号间隔
  update users set pwd='admin456' where id=1
- 注意！！！ 一定记得带上where不然整张表的pwd列都会被更新

###delete
>从指定表中 删除对应行
delete from user where id=2
- 注意！！！记得要带where不然 会删除整张表


