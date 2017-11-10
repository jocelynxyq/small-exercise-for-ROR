# 高级软件工程第一次作业

---

本项目为中国科学院大学高级软件工程课程第一次作业。

## 内容  

在`Ruby On Rails`框架中实现一个简单主页，完成

* 基本网页布局

* 链接到其他网站

* 显示本地时间

* 页面间的跳转

* 数据库数据显示

* 数据库内容添加，编辑，删除等功能。

**项目部署在heroku上，地址：https://jocelynpage.herokuapp.com/**

欢迎访问！

## 说明  

* 项目在Cloud9上完成，为了方便部署，数据库采用Postgresql。  

* 基本网页布局利用`boostrap`完成。超链接利用页面html的a标签的href属性，显示当前时间利用js，定义button的onclick方法完成。  

* 页面间的跳转通过在route.rb中定义路由，在相应controller中定义方法，由views组织页面完成。  

* 学生信息表的定义利用rails generate scaffold完成，自动生成的页面模板中加入了一些布局。

* 网页中头像等图片素材来自网络。

另附网页截图：

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

### 数据展示

数据页显示当前数据库中的数据，数据以学生信息表为情景建立，有姓名，学号，专业和邮箱四个字段。数据页如下所示：

![数据页](/app/assets/images/screenshot/5数据展示-数据页.PNG)

### 数据添加编辑

可点击编辑和删除进行指定数据和行的编辑和删除操作。

可点击添加进行数据的添加操作。如下所示：

![数据添加](/app/assets/images/screenshot/6数据添加-数据页.PNG)

### 数据更新

添加数据行后，数据列表如下：

![数据更新](/app/assets/images/screenshot/7数据更新-数据页.PNG)

---

**参考资料**  

[Ruby on Rails Tutorial](https://www.railstutorial.org/book/_single-page)  

[Ruby on Rails Guides](http://guides.rubyonrails.org/command_line.html)  

[Rails Web应用开发实战－学生选课系统基础版（二）](http://blog.csdn.net/ppp8300885/article/details/52601560)   
