# 高级软件工程第一次作业
---

本项目为中国科学院大学高级软件工程课程第一次作业内容。

项目主体：在Ruby On Rails框架中实现一个简单主页，完成

* 基本网页布局

* 链接到其他网站

* 显示本地时间

* 页面间的跳转

* 数据库数据显示

* 数据库内容添加，编辑，删除   等功能。

项目在Cloud9上完成，为了方便部署，数据库采用Postgresql。

![c9](/app/assets/images/screenshot/0Cloud9.PNG)

本来想将项目部署到Heroku，但是目前Heroku官网只能访问注册页面，无法打开验证邮件的链接和登陆页面，故无法注册成功账号从而部署来提供外网访问链接。

故提供网页截图如下：

## 网站主页

![主页](/app/assets/images/screenshot/1主页.PNG)

页面中有两个按钮，分别实现超链接跳转和显示当前时间的功能。如下：

### 超链接跳转

![超链接](/app/assets/images/screenshot/3按钮点击跳转超链接.PNG)


### 显示当前时间

![显示时间](/app/assets/images/screenshot/2按钮点击显示时间.PNG)

## 关于页

### 页面间跳转

导航栏实现页面间跳转功能。如跳转到关于页，如下所示：

![关于页](/app/assets/images/screenshot/4页面跳转-关于页.PNG)

## 数据页

### 数据操作

数据页显示当前数据库中的数据，数据以学生信息表为情景建立，有姓名，学号，专业和邮箱四个字段。数据页如下所示：

![数据页](/app/assets/images/screenshot/5数据展示-数据页.PNG)

可点击编辑和删除进行指定数据和行的编辑和删除操作。

可点击添加进行数据的添加操作。如下所示：

![数据添加](/app/assets/images/screenshot/6数据添加-数据页.PNG)

添加数据行后，数据列表如下：

![数据更新](/app/assets/images/screenshot/7数据更新-数据页.PNG)

---

页面布局和部分样式利用Bootstrap完成。

网页中头像等图片素材来自网络。

参考：Ruby On Rails官网，Stackoverflow